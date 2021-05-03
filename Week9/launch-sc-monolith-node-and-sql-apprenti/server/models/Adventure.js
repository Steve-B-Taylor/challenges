import pg from "pg"
import fs from "fs"
import _ from "lodash"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/monolith_adventures_development",
})

class Adventure {
  constructor({ id = null, title, location_id, locationId }) {
    ;(this.id = id), (this.title = title), (this.locationId = location_id || locationId)
  }

  static async findAll() {
    try {
      const kraken = await pool.connect()
      const result = await kraken.query("SELECT * FROM adventures;")
      const advData = result.rows

      // release (The Kraken!!!) client connection
      kraken.release()

      return advData
    } catch (error) {
      console.error(`Adventure.findAll() ERROR: ${error}`)
      pool.end()
    }
  }

  static async findById(id) {
    try {
      const kraken = await pool.connect()
      const result = await kraken.query("SELECT * FROM adventures WHERE id = $1;", [id])

      const adventure = new this(result.rows[0])

      // release (The Kraken!!!) client connection
      kraken.release()

      return adventure
    } catch (error) {
      console.error(`Adventure.findById() ERROR: ${error}`)
      pool.end()
    }
  }

  async save() {
    try {
      const kraken = await pool.connect()
      const queryString = "INSERT INTO adventures (title) VALUES ($1, $2) RETURNING id;"
      const result = await kraken.query(queryString, [this.title])
      this.id = result.rows[0].id

      // release (The Kraken!!!) client connection
      kraken.release()

      return true
    } catch (error) {
      console.error(`Adventure.save() ERROR: ${error}`)
      pool.end()
      return false
    }
  }

  async Locations() {
    const locationFile = await import("./Location.js")
    const Location = locationFile.default

    try {
      const kraken = await pool.connect()
      const query = "SELECT * FROM locations WHERE id = $1;"
      const result = await kraken.query(query, [this.locationId])

      //get the results
      const relatedLocationsData = result.rows[0]
      relatedLocations = new Location(relatedLocationsData)

      //release the (kraken!) client connection back to the pool
      kraken.release()

      return relatedLocations
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export default Adventure
