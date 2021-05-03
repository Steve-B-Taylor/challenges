import pg from "pg"
const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/monolith_adventures_development",
})

class Seeder {
  static async seed() {
    try {
      const locations = [
        {
          name: "Tahiti",
        },
        {
          name: "Australia",
        },
        {
          name: "Alaska",
        },
      ]

      for (let i = 0; i < locations.length; i++) {
        const location = locations[i]
        const queryString = `INSERT INTO locations (name) VALUES ('${location.name}');`
        await pool.query(queryString)
      }

      const tahitiData = await pool.query("SELECT * FROM locations WHERE name = 'Tahiti';")
      const tahiti = tahitiData.rows[0]
      const australiaData = await pool.query("SELECT * FROM locations WHERE name = 'Australia';")
      const australia = australiaData.rows[0]
      const alaskaData = await pool.query("SELECT * FROM locations WHERE name = 'Alaska';")
      const alaska = alaskaData.rows[0]

      const adventures = [
        { name: "Surf Tahiti", locations: tahiti },
        { name: "Dive for black pearls", locations: tahiti },
        { name: "Dive on Great Barrier Reef", locations: australia },
        { name: "Fish for Halibut", locations: alaska },
      ]

      for (let i = 0; i < adventures.length; i++) {
        const adventure = adventures[i]
        const queryString = `INSERT INTO adventures (title, location_id) VALUES ('${adventure.name}', ${adventure.locations.id});`
        await pool.query(queryString)
      }
      console.log("Seeding complete")
      pool.end()
    } catch (error) {
      console.log(error)
      pool.end()
    }
  }
}

export default Seeder
