import pg from "pg";
const pool = new pg.Pool({
  connectionString:
    "postgres://postgres:password@localhost:5432/launch_digital_library_development",
});

class Seeder {
  static async seed() {
    try {
      // const query =
      // "INSERT INTO books (title, author, page_count, description, fiction) VALUES ($1, $2, $3, $4, $5)";

      const record1 = await pool.query(
        "INSERT INTO books (title, author, page_count, description, fiction) VALUES ('The Hobbit', 'J.R.R. Tolkein', 303, 'Bilbo Baggins was a hobbit who wanted to be left alone in quiet comfort.  But the wizard Gandalf came along with a band of homeless dwarves.', True);"
      );
      const record2 = await pool.query(
        "INSERT INTO books (title, author, page_count, description, fiction) VALUES ('Pacific Northwest Foraging', 'Douglas Deur', 290, 'A seasonal guide for foraging uear-round with detailed information for safe identification and tips for sustainable harvesting', False);"
      );
      const record3 = await pool.query(
        "INSERT INTO books (title, author, page_count, description, fiction) VALUES ('The Complete Calvin and Hobbes, Book Two', 'Bill Watterson', 479, 'A view of life through the lens of an imaginative first grade boy and his pet tiger', True);"
      );

      // const record1 =
      //   ("The Hobbit",
      //   "J.R.R. Tolkein",
      //   303,
      //   "Bilbo Baggins was a hobbit who wanted to be left alone in quiet comfort.  But the wizard Gandalf came along with a band of homeless dwarves.",
      //   true);

      // const record2 =
      //   ("Pacific Northwest Foraging",
      //   "Douglas Deur",
      //   290,
      //   "A seasonal guide for foraging uear-round with detailed information for safe identification and tips for sustainable harvesting",
      //   false);

      // const record3 =
      //   ("The Complete Calvin and Hobbes, Book Two",
      //   "Bill Watterson",
      //   479,
      //   "A view of life through the lens of an imaginative first grade boy and his pet tiger",
      //   true);
      // await pool.query[(query, record1)];
      // await pool.query[(query, record2)];
      // await pool.query[(query, record3)];

      const result = await pool.query("SELECT * FROM books;");
      console.log(result.rows);
      pool.end();
    } catch (error) {
      console.log(error);
      pool.end();
    }
  }
}
export default Seeder;
