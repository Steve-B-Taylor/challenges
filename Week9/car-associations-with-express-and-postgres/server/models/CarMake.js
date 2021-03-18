import pg from "pg";
import _ from "lodash";

const pool = new pg.Pool({
  connectionString:
    "postgres://postgres:password@localhost:5432/car_associations_development",
});

class CarMake {
  constructor({ id, name }) {
    this.id = id;
    this.name = name;
  }

  static async findAll() {
    try {
      const kraken = await pool.connect();
      const result = await kraken.query("SELECT * FROM car_makes;");

      //get the results
      const carMakeData = result.rows;
      const carMakes = carMakeData.map((carMake) => new this(carMake));

      //release the (kraken!) client connection back to the pool
      kraken.release();

      return carMakes;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async findById(id) {
    try {
      const kraken = await pool.connect();
      const query = "SELECT * FROM car_makes WHERE ID = " + id + ";";
      const result = await kraken.query(query);

      //get the results
      const carMakeData = result.rows[0];
      const carMake = new this(carMakeData);

      //release the (kraken!) client connection back to the pool
      kraken.release();

      return carMake;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async carModels() {
    const carModelFile = await import("./CarModel.js");
    const CarModel = carModelFile.default;

    try {
      const kraken = await pool.connect();
      const query = "SELECT * FROM car_models WHERE car_make_id = $1;";
      const result = await kraken.query(query, [this.id]);

      //get the results
      const relatedCarModelsData = result.rows;
      const relatedCarModels = relatedCarModelsData.map(
        (carModel) => new CarModel(carModel)
      );

      //release the (kraken!) client connection back to the pool
      kraken.release();

      return relatedCarModels;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default CarMake;
