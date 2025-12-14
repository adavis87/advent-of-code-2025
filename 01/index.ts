import { fileHandler as handler } from "../helpers/fileHandler.js";

const input: string[] = handler("input.txt").trim().split("\n");

const partOne = (): number => {
  let currentPosition = 50;
  const zeroCount = input.reduce((acc: number, line: string): number => {
    const num = parseInt(line.slice(1), 10);

    if (line[0] === "R") {
      currentPosition = (currentPosition + num) % 100;
    } else {
      currentPosition -= num;
      while (currentPosition < 0) {
        currentPosition += 100;
      }
    }
    return acc + (currentPosition === 0 ? 1 : 0);
  }, 0);
  return zeroCount;
};

const part2 = (): void => {
  let current = 50;

  const zerosCount = input.reduce((acc: number, line: string): number => {
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

const part_one: number = partOne();
part2();
