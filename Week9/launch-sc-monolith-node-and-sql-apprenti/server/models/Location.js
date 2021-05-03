import pg from "pg"
import fs from "fs"
import _ from "lodash"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/monolith_adventures_development",
})

class Location {
  constructor({ id = null, name }) {
    ;(this.id = id), (this.name = name)
  }

  static async findAll() {
    try {
      const kraken = await pool.connect()
      const result = await kraken.query("SELECT * FROM locations;")
      const locData = result.rows

      // release (The Kraken!!!) client connection
      kraken.release()

      return locData
    } catch (error) {
      console.error(`Location.findAll() ERROR: ${error}`)
      pool.end()
    }
  }

  static async findById(id) {
    try {
      const kraken = await pool.connect()
      const result = await kraken.query("SELECT * FROM locations WHERE id = $1;", [id])

      const location = new this(result.rows[0])

      // release (The Kraken!!!) client connection
      kraken.release()

      return location
    } catch (error) {
      console.error(`Location.findById() ERROR: ${error}`)
      pool.end()
    }
  }

  async save() {
    try {
      const kraken = await pool.connect()
      const queryString = "INSERT INTO locations (name) VALUES ($1) RETURNING id;"
      const result = await kraken.query(queryString, [this.name])
      this.id = result.rows[0].id

      // release (The Kraken!!!) client connection
      kraken.release()

      return true
    } catch (error) {
      console.error(`Location.save() ERROR: ${error}`)
      pool.end()
      return false
    }
  }

  async Adventures() {
    const adventureModelFile = await import("./Adventure.js")
    const Adventure = adventureModelFile.default

    try {
      const kraken = await pool.connect()
      const query = "SELECT * from adventures WHERE location_id = $1;"
      const result = await kraken.query(query, [this.id])

      console.log(`Location.Adventures() result: ${result}`)
      const relatedAdventuresData = result.rows
      const relatedAdventures = relatedAdventuresData.map((adventure) => new Adventure(adventure))
      this.id = result.rows[0].id

      // release (The Kraken!!!) client connection
      kraken.release()

      return relatedAdventures
    } catch (error) {
      console.error(`Location.Adventures() ERROR: ${error}`)
      pool.end()
    }
  }
}

export default Location
