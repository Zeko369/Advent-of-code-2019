const fs = require("fs");
const filename = "input.txt";
const debug = false;
let text = "1002,4,3,4,33";
const text2 = "1101,100,-1,4,0";
const text3 =
  "3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99";

text = "3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9";
text = text3;

const textFromFile = fs.readFileSync(filename, { encoding: "utf8" });

const source = debug ? text : textFromFile;

const arr = source.split(",").map(Number);

// console.log(arr);

const isFirst = false;

for (let i = 0; i < arr.length; ) {
  let stop = false;
  const code = arr[i];
  const last2 = code % 100;
  const first3 = Math.floor(code / 100);

  const params = Array.from(new Array(3), (_, i) => i).map(i =>
    Math.floor((first3 / Math.pow(10, i)) % 10)
  );

  if (last2 === 99) {
    break;
  }

  //          c      b       a
  // abccode, first, second, third
  // 01101
  const [a, b] = [
    params[0] ? arr[i + 1] : arr[arr[i + 1]],
    params[1] ? arr[i + 2] : arr[arr[i + 2]]
  ];

  switch (last2) {
    case 1:
      arr[arr[i + 3]] = a + b;
      i += 4;
      break;
    case 2:
      arr[arr[i + 3]] = a * b;
      i += 4;
      break;
    case 3:
      arr[arr[i + 1]] = isFirst ? 1 : 5;
      i += 2;
      break;
    case 4:
      if (params[0]) {
        console.log(arr[i + 1]);
      } else {
        console.log(arr[arr[i + 1]]);
      }
      i += 2;
      break;
    case 5:
      if (a !== 0) {
        i = b;
      } else {
        i += 3;
      }
      break;
    case 6:
      if (a === 0) {
        i = b;
      } else {
        i += 3;
      }
      break;
    case 7:
      arr[arr[i + 3]] = a < b ? 1 : 0;
      i += 4;
      break;
    case 8:
      arr[arr[i + 3]] = a === b ? 1 : 0;
      i += 4;
      break;
    default:
      console.log(arr, arr[i]);
      console.error("ERROR");
      stop = 1;
      break;
  }

  if (stop) {
    break;
  }
}

// console.log(arr);
