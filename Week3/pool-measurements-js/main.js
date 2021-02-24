// your code, here
import Pool from "./Pool.js";

let pool1 = new Pool(12, 10);
let pool2 = new Pool(4, 6);
let pool3 = new Pool(10, 15);
let pool4 = new Pool(5);
let pool5 = new Pool(9);
// console.log(pool1);
console.log(
  `Pool1 Dimenssions:\nlength:${pool1.length}  width: ${pool1.width}`
);
console.log(`Area: ${pool1.area()}\nVolume: ${pool1.volume()}\n`);

console.log(
  `Pool2 Dimenssions:\nlength:${pool2.length}  width: ${pool2.width}`
);
console.log(`Area: ${pool2.area()}\nVolume: ${pool2.volume()}\n`);

console.log(
  `Pool3 Dimenssions:\nlength:${pool3.length}  width: ${pool3.width}`
);
console.log(`Area: ${pool3.area()}\nVolume: ${pool3.volume()}\n`);

console.log(
  `Pool4 Dimenssions:\nlength:${pool4.length}  width: ${pool4.width}`
);
console.log(`Area: ${pool4.area()}\nVolume: ${pool4.volume()}\n`);

console.log(
  `Pool5 Dimenssions:\nlength:${pool5.length}  width: ${pool5.width}`
);
console.log(`Area: ${pool5.area()}\nVolume: ${pool5.volume()}\n`);
