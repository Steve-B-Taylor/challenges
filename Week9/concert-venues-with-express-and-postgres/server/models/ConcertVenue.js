import pg from "pg";
import _ from "lodash";

const pool = new pg.Pool({
  connectionString:
    "postgres://postgres:password@localhost:5432/concert_venues_development",
});

class ConcertVenue {
  constructor({ id, name, location, capacity }) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.capacity = capacity;
  }

  static async findAll() {
    try {
      const client = await pool.connect();
      const result = await client.query("SELECT * FROM concert_venues;");

      //get the results
      const concertVenueData = result.rows;

      const concertVenues = concertVenueData.map(
        (concertVenue) => new this(concertVenue)
      );

      //release the connection back to the pool
      client.release();

      return concertVenues;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async save() {
    try {
      const client = await pool.connect();
      // This also works and may be easier to fill out but is less secure against SQL injection
      // let query =
      //   "INSERT INTO concert_venues (name, location, capacity) VALUES ";
      // query += `('${this.name}', '${this.location}', ${this.capacity});`;
      // console.log(query);
      // await client.query(query);

      let query =
        "INSERT INTO concert_venues (name, location, capacity) VALUES ($1, $2, $3);";
      await client.query(query, [this.name, this.location, this.capacity]);

      const result = await client.query(
        "SELECT * FROM concert_venues ORDER BY ID DESC LIMIT 1;"
      );

      const persistedVenue = result.rows[0];
      this.id = persistedVenue.id;

      client.release();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export default ConcertVenue;
