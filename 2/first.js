const fs = require("fs");
const filename = "actual.txt";

const clean = data => data.split(",").map(item => parseInt(item));

let arr = clean(fs.readFileSync(filename, { encoding: "utf-8" }));

const run = arr => {
  for (let i = 0; i < arr.length; i += 4) {
    const [code, first, second, pos] = arr.slice(i, i + 4);

    if (code === 99) {
      break;
    }

    if (code === 1) {
      arr[pos] = arr[first] + arr[second];
    } else if (code === 2) {
      arr[pos] = arr[first] * arr[second];
    }
  }

  return arr.join(",");
};

arr[1] = 12;
arr[2] = 2;

const out = run(arr);

console.log(out.slice(0, out.indexOf(",")));

// const data = [
//   ["1,0,0,0,99", "2,0,0,0,99"],
//   ["2,3,0,3,99", "2,3,0,6,99"],
//   ["2,4,4,5,99,0", "2,4,4,5,99,9801"],
//   ["1,1,1,4,99,5,6,0,99", "30,1,1,4,2,5,6,0,99"]
// ];

// data.forEach(row => {
//   const [input, output] = row;

//   const my = run(clean(input));
//   if (my !== output) {
//     console.log(my);
//     console.log(output);
//   } else {
//     console.log("Done");
//   }
// });
