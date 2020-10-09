const lineReader = require('line-reader'); 

let i = 0;
let lines = [];
lineReader.eachLine('summary.txt', (line, last) => {
	lines[i] = Number(line);
	if (!isNaN(lines[i])){
		i+=1;
	}
	if (last){
		console.log(lines.reduce((accumulator, currentValue) => {return accumulator + currentValue}));
		console.log(lines);
	}
}); 