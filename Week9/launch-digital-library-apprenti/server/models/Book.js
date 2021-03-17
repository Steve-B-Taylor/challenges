import pg from "pg";
import _ from "lodash";

const pool = new pg.Pool({
  connectionString:
    "postgres://postgres:password@localhost:5432/launch_digital_library_development",
});

class Book {
  constructor({
    id = null,
    title = null,
    author = null,
    page_count = null,
    pageCount = null,
    description,
    fiction,
  }) {
    (this.id = id),
      (this.title = title),
      (this.author = author),
      (this.page_count = page_count),
      (this.pageCount = page_count || pageCount),
      (this.description = description),
      (this.fiction = fiction);
  }
  static async findAll() {
    try {
      const client = await pool.connect();
      const result = await client.query("SELECT * FROM books;");

      const booksData = result.rows;
      const books = booksData.map((book) => new this(book));

      client.release();
      return books;
    } catch (error) {
      console.error(`ERROR: ${error}`);
      pool.end();
    }
  }

  static async findById(id) {
    try {
      const client = await pool.connect();
      const result = await client.query(`SELECT * FROM books WHERE id = $1`, [
        id,
      ]);

      const book = result.rows[0];

      client.release();
      return book;
    } catch (error) {
      console.error(`ERROR: ${error}`);
      pool.end();
    }
  }

  isValid() {
    this.errors = {};
    const requiredFields = ["title", "author", "page_count"];
    let isValid = true;

    for (const requiredField of requiredFields) {
      this.errors[requiredField] = [];
      if (!this[requiredField]) {
        isValid = false;
        this.errors[requiredField].push("Can't be blank");
      }
      if (this[requiredField] == null) {
        isValid = false;
        this.errors[requiredField].push("Can't be blank");
      }
    }
    console.log(`ERROR:  ${this.errors}`);
    console.log(`isValid: ${isValid}`);

    return isValid;
  }

  async save() {
    // if (this.isValid()) {
    try {
      const client = await pool.connect();
      let query =
        "INSERT INTO books (title, author, page_count, description, fiction) VALUES ($1, $2, $3, $4, $5);";
      await client.query(query, [
        this.title,
        this.author,
        this.page_count,
        this.description,
        this.fiction,
      ]);
      const result = await client.query(
        "SELECT * FROM books ORDER BY id DESC LIMIT 1"
      );
      const newBookData = result.rows[0];
      this.id = newBookData.id;
      //release the connection back to the pool
      client.release();

      return true;
    } catch (err) {
      console.log(err);
      return false;
      pool.end();
    }
    // } else {
    //   return false;
    // }
  }
}

export default Book;
