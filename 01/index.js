import { fileHanlder } from "../helpers/fileHandler.js";

let input = fileHanlder('input.txt').trim().split('\n');

let partOne = () => {
    let currentPosition = 50;
    let zeroCount = input.reduce((acc, line) => {
        let num = parseInt(line.slice(1), 10);
        
        if (line[0] === 'R') {
           currentPosition = (currentPosition + num) % 100;
          
        }
        else {
            //decrement num;
            currentPosition -= num;
            while (currentPosition < 0) {
                currentPosition += 100;
            }

        }
        return acc + (currentPosition === 0 ? 1 : 0);
    },0)
    return zeroCount;
    
}
const part_one = partOne();

