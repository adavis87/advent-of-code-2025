import { fileHandler } from "../helpers/fileHandler.js";

const lines = fileHandler('sample_input.txt', 'utf-8').trim().split('\n');
let firstMax = lines.map((line) => Math.max(...line));
console.log(firstMax);