import { fileHandler } from "../helpers/fileHandler.js";

// we need to split the array by new lines and commas and make sure we filter out falsy values (empty strings)
const lines = fileHandler("sample_input.txt", "uft-8")
  .trim()
  .split(/[,\n]/)
  .filter(Boolean)
  .map((r) => {
    const dashIndex = r.indexOf("-");
    return {
      start: Number(r.slice(0, dashIndex)),
      end: Number(r.slice(dashIndex + 1)),
    };
  });

const partOne = () => {};
