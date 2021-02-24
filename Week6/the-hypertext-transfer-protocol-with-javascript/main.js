import Url from "url";
import request from "request";
import fs from "fs";

const url = Url.parse("https://reddit.com/r/gifs");
const url2 = Url.parse("https://google.com/search?q=cats&tbm=isch");
const url3 = Url.parse(
  "https://en.wikipedia.org/wiki/Fragment_identifier#Examples"
);
// console.log(url.protocol);
// console.log(url.host);
// console.log(url.path);

// console.log(url2.protocol);
// console.log(url2.host);
// console.log(url2.path);

// console.log(url3.protocol);
// console.log(url3.host);
// console.log(url3.path);
