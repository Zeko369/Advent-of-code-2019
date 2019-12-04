const [from, to] = [272091, 815432]

const ok = (num) => {
	const str = num.toString();
	let same = false;
	for(let i = 1; i < str.length; i++) {
		if(str[i-1] > str[i]) {
			return false;	
		}
		if(str[i-1] == str[i]) {
			same = true;
		}
	}

	if(!same) {
		return false;
	}

	return true;
}

const ok2 = (num) => {
	const str = num.toString();
	let last = str[0], count = 1;

	for(let i = 1; i < str.length; i++) {
		if(last == str[i]) {
			count++;
		} else {
			if(count == 2) {
				return true;
			}

			count = 1;
			last = str[i];
		}
	}

	if(count == 2) {
		return true;
	}
	return false;
}

let count = 0;
let count2 = 0;
for(let i = from; i <= to; i++) {
	if(ok(i)) {
		count++;
	}	
}

for(let i = from; i <= to; i++) {
	if(ok(i) && ok2(i)) {
		count2++;
	}
}

console.log(count);
console.log(count2);
