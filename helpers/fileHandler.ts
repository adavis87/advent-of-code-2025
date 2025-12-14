import * as fs from "fs";

export function fileHandler(input: string): string {
  return fs.readFileSync(input, "utf-8");
}
