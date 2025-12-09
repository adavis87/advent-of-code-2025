import { fileHandler } from "../helpers/fileHandler.js";

const lines = fileHandler('input.txt', 'utf-8').split('\n').map(l => l.trim());
let results = 0;

for (let i =0; i < lines.length; i++) {
    let cluster = lines[i]
    let maxAmt = 0
    for (let j = 0; j < cluster.length; j++) {
        for (let k = j + 1; k < cluster.length; k++) {
            const digitOne = cluster[j];
            const digitTwo = cluster[k];
            const sum = parseInt(digitOne + digitTwo, 10);
            if (sum > maxAmt) {
                    maxAmt = sum;
                }
            }
    }
    results += maxAmt;
}
