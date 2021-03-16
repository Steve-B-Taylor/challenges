import pg from "pg"
import fs from "fs"
import _ from "lodash"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/movie-stars-pg",
})

class Movie {
  // This does not appear to be needed since our result.rows gives us the colums
  // constructor({ id, title, genre, description }) {
  //   ;(this.id = id), (this.title = title), (this.genre = genre), (this.description = description)
  // }

  static async findAll() {
    try {
      const client = await pool.connect()
      const result = await client.query("SELECT * FROM movies;")

      const movies = result.rows

      client.release()
      return movies
    } catch (error) {
      console.error(`ERROR: ${error}`)
      pool.end()
    }
  }

  static async findById(id) {
    try {
      const client = await pool.connect()
      const result = await client.query(`SELECT * FROM movies WHERE id = $1`, [id])
      // This works, but the above line is safer
      // const result = await client.query(`SELECT * FROM movies WHERE id = ${id}`)

      const movie = result.rows[0]

      client.release()
      return movie
    } catch (error) {
      console.error(`ERROR: ${error}`)
      pool.end()
    }
  }
}
export default Movie
