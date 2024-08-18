const fs = require('fs');

let digits = fs.readFileSync('digits.txt', 'utf-8').trim().split("").sort((a, b) => a - b);
let length = parseInt(fs.readFileSync('length.txt', 'utf-8').trim(), 10);

function generateCombinations(digits, length, filePath) {
    const combinations = [];
    const totalCombinations = Math.pow(digits.length, length);

    for (let i = 0; i < totalCombinations; i++) {
        let combo = "";
        let usedDigits = new Set();
        let index = i;

        for (let j = 0; j < length; j++) {
            let digit = digits[index % digits.length];
            combo += digit + (j < length - 1 ? " " : "");
            usedDigits.add(digit);
            index = Math.floor(index / digits.length);
        }

        if (usedDigits.size === digits.length) {
            combinations.push(combo.trim());
        }
    }

    combinations.sort();

    fs.writeFile(filePath, combinations.join('\n'), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Combinations have been written to', filePath);
        }
    });
}

const filePath = "combinations.txt";
generateCombinations(digits, length, filePath);