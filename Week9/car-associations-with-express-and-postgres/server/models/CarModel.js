import pg from "pg";
import _ from "lodash";

const pool = new pg.Pool({
  connectionString:
    "postgres://postgres:password@localhost:5432/car_associations_development",
});

class CarModel {
  constructor({ id, name, car_make_id, carMakeId }) {
    this.id = id;
    this.name = name;
    this.carMakeId = car_make_id || carMakeId;
  }

  static async findAll() {
    try {
      const kraken = await pool.connect();
      const result = await kraken.query("SELECT * FROM car_makes;");

      //get the results
      const carModelData = result.rows;
      const carModels = carModelData.map((carModel) => new this(carModel));

      //release the (kraken!) client connection back to the pool
      kraken.release();

      return carModels;
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
      const carModelData = result.rows[0];
      const carModel = new this(carModelData);

      //release the (kraken!) client connection back to the pool
      kraken.release();

      return carModel;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async carMake() {
    const carMakeFile = await import("./CarMake.js");
    const CarMake = carMakeFile.default;

    try {
      const kraken = await pool.connect();
      const query = "SELECT * FROM car_makes WHERE ID = $1;";
      const result = await kraken.query(query, [this.carMakeId]);

      //get the results
      const relatedCarMakeData = result.rows[0];
      const relatedCarMake = new CarMake(relatedCarMakeData);

      //release the (kraken!) client connection back to the pool
      kraken.release();

      return relatedCarMake;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default CarModel;
