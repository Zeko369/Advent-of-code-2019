const fs = require('fs');

const calc = (data) => Math.floor(parseInt(data) / 3) - 2;

const solve_first = (lines) => {
    const out = lines.reduce((prev, curr) => prev + calc(curr), 0);
    console.log(out);
}

const calc_with_fuel = (number) => {
    const tmp = Math.floor(parseInt(number) / 3) - 2;

    if (tmp <= 0) {
        return 0;
    }

    return tmp + calc_with_fuel(tmp);
}

const solve_second = (lines) => {
    const data = lines.map(calc_with_fuel);
    const out = data.reduce((prev, curr) => prev + curr, 0);
    console.log(out);
}

fs.readFile('in.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const lines = data.split('\n');

    solve_first(lines);
    solve_second(lines);
});
