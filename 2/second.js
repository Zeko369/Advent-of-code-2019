const fs = require("fs");
const filename = "actual.txt";

const clean = data => data.split(",").map(item => parseInt(item));

let arr = [];

const load_data = () => {
  arr = clean(fs.readFileSync(filename, { encoding: "utf-8" }));
};

load_data();

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

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    load_data();
    arr[1] = i;
    arr[2] = j;

    out = run(arr);

    const addr0 = parseInt(out.slice(0, out.indexOf(",")));

    if (addr0 === 19690720) {
      console.log(i * 100 + j);
    }
  }
}
