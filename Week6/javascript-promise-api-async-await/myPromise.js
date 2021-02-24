// myPromise.js

import fs from "fs";

let read = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        reject(new Error(err));
      } else {
        resolve(data);
      }
    });
  });
};

try {
  const data = await read("books.json");
  console.log("Data retrieved!");
  const parsedData = JSON.parse(data);
  console.log(parsedData);
} catch (err) {
  console.log("Something went wrong.");
  console.log(err);
}
