import { fileHandler } from "../helpers/fileHandler.js";

function solution(input: string): number {
  const iteratable: string[] = input.split(",");
  let invalidProductIdSum = 0;
  for (const value of iteratable) {
    const valueSeparator: string[] = value.split("-");
    const start: number = parseInt(valueSeparator[0], 10);
    const end: number = parseInt(valueSeparator[1], 10);
    for (let i = start; i <= end; i++) {
      let pattern = "";
      const str = i.toString();
      for (const char of str) {
        pattern += char;
        if (pattern === str.slice(pattern.length)) {
          invalidProductIdSum += i;
        }
      }
    }
  }
  return invalidProductIdSum;
}

const part_one: number = solution(fileHandler("./input.txt"));

function solutionTwo(input: string): number {
  const inputIterable: string[] = input.split(",");
  let sum = 0;

  for (const range of inputIterable) {
    const separator: string[] = range.split("-");
    const start: number = parseInt(separator[0], 10);
    const end: number = parseInt(separator[1], 10);

    for (let i = start; i <= end; i++) {
      let pattern = "";
      const str = i.toString();

      for (const char of str) {
        pattern += char;

        if (pattern.length > str.length / 2) {
          break;
        }

        let isInvalid = true;

        for (let j = pattern.length; j < str.length; j += pattern.length) {
          if (pattern !== str.slice(j, j + pattern.length)) {
            isInvalid = false;
            break;
          }
        }

        if (isInvalid) {
          sum += i;
          break;
        }
      }
    }
  }

  return sum;
}

const part_two: number = solutionTwo(fileHandler("./input.txt"));
console.log(`Part 1: ${part_one}`);
console.log(`Part 2: ${part_two}`);
