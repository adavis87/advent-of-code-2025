import { fileHandler } from "../helpers/fileHandler.js";

function solution(input) {
  let iteratable = input.split(",");
  let invalidProductIdSum = 0;
  for (const value of iteratable) {
    const value_seperator = value.split("-");
    for (
      let i = parseInt(value_seperator[0]);
      i <= parseInt(value_seperator[1]);
      i++
    ) {
      let pattern = "";
      let str = i.toString();
      for (const char of str) {
        pattern += char;

        if (pattern === str.slice(pattern.length)) {
          invalidProductIdSum += parseInt(str);
        }
      }
    }
  }
  return invalidProductIdSum;
}

const part_one = solution(fileHandler("./input.txt", "utf-8"));

function solutionTwo(input) {
  let input_interable = input.split(",");
  let sum = 0;

  for (const range of input_interable) {
    let separator = range.split("-");

    for (let i = parseInt(separator[0]); i <= parseInt(separator[1]); i++) {
      let pattern = "";
      let string = i.toString();

      for (const char of string) {
        pattern += char;

        if (pattern.length > string.length / 2) {
          break;
        }

        let is_this_the_invalid = true;

        // checks each pattern now
        for (let i = pattern.length; i < string.length; i += pattern.length) {
          if (pattern !== string.slice(i, i + pattern.length)) {
            is_this_the_invalid = false;
            break;
          }
        }

        if (is_this_the_invalid) {
          sum += parseInt(string);
          break;
        }
      }
    }
  }

  console.log(`The sum is: ${sum}`);
}

const part_two = solutionTwo(fileHandler("./input.txt", "utf-8"));
console.log(part_two);
