import { fileHandler } from "../helpers/fileHandler.js";

const lines: string[] = fileHandler("input.txt")
  .split("\n")
  .map((l: string) => l.trim());
let results: number = 0;

for (let i = 0; i < lines.length; i++) {
  const cluster: string = lines[i];
  let maxAmt: number = 0;
  for (let j = 0; j < cluster.length; j++) {
    for (let k = j + 1; k < cluster.length; k++) {
      const digitOne: string = cluster[j];
      const digitTwo: string = cluster[k];
      const sum: number = parseInt(digitOne + digitTwo, 10);
      if (sum > maxAmt) {
        maxAmt = sum;
      }
    }
  }
  results += maxAmt;
}

/* ######################################################## PART TWO ############################################################ */

function partTwo(): number {
  const maxJoltage = (line: string, count: number, start: number = 0): string => {
    if (count === 0) return "";
    const endPos: number = line.length - count;
    let maxDigit: string = "0";
    let maxIdx: number = start;
    for (let i = start; i <= endPos; i++) {
      if (line[i] > maxDigit) {
        maxDigit = line[i];
        maxIdx = i;
      }
    }
    return maxDigit + maxJoltage(line, count - 1, maxIdx + 1);
  };
  return lines.reduce((sum: number, line: string) => sum + Number(maxJoltage(line, 12)), 0);
}

console.log(partTwo());
