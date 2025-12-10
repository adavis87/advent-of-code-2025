import { fileHandler } from "../helpers/fileHandler.js";

const rollsOfPaper = fileHandler("input", "utf-8").trim().split("\n");

const offsets = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const toyInput = ["@.,@@"];
