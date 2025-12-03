import { fileHanlder as handler } from "../helpers/fileHandler.js";

let input = handler("input.txt").trim().split("\n");

let partOne = () => {
  let currentPosition = 50;
  let zeroCount = input.reduce((acc, line) => {
    let num = parseInt(line.slice(1), 10);

    if (line[0] === "R") {
      currentPosition = (currentPosition + num) % 100;
    } else {
      //decrement num;
      currentPosition -= num;
      while (currentPosition < 0) {
        currentPosition += 100;
      }
    }
    return acc + (currentPosition === 0 ? 1 : 0);
  }, 0);
  return zeroCount;
};

const part2 = () => {
  let current = 50;

  const zerosCount = input.reduce((acc, line) => {
    const num = parseInt(line.slice(1), 10);

    if (line[0] === "R") {
      acc += num >= 100 ? Math.floor(num / 100) : 0;
      acc += current + (num % 100) > 100 ? 1 : 0;
      current = (current + num) % 100;
    } else {
      let start = current;
      current -= num;
      while (current < 0) {
        current += 100;
        acc++;
        if (start === 0) {
          acc--;
          start = current;
        }
      }
    }

    return acc + (current === 0 ? 1 : 0);
  }, 0);

  console.log("Part 2: ", zerosCount);
};

const part_one = partOne();
part2();

