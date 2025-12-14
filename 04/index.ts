import { fileHandler } from "../helpers/fileHandler.js";

const rollsOfPaper: string[] = fileHandler("input").trim().split("\n");


// This will hold our final answer
let totalAccessibleRolls: number = 0;

// The 8 directions we defined earlier
const offsets: Array<[number, number]> = [
    [-1, -1], [-1, 0], [-1, 1], 
    [0, -1],           [0, 1], 
    [1, -1],  [1, 0],  [1, 1]   
];

// --- LOOP 1: Go through every Row ---
for (let row = 0; row < rollsOfPaper.length; row++) {
    
    // --- LOOP 2: Go through every Column in that Row ---
    for (let col = 0; col < rollsOfPaper[row].length; col++) {
        
        // STEP 1: Filter
        // If the current spot is NOT a roll (@), skip it immediately.
        if (rollsOfPaper[row][col] !== '@') {
            continue; 
        }

        // STEP 2: Investigate (Count the neighbors)
        // This is the logic we wrote for the toy problem!
        let neighborCount: number = 0;

        for (let i = 0; i < offsets.length; i++) {
            const offset: [number, number] = offsets[i];
            const checkRow: number = row + offset[0];
            const checkCol: number = col + offset[1];

            // Bounds Check: Is this neighbor actually inside the rollsOfPaper?
            const isRowValid: boolean = checkRow >= 0 && checkRow < rollsOfPaper.length;
            const isColValid: boolean = checkCol >= 0 && checkCol < rollsOfPaper[0].length;

            if (isRowValid && isColValid) {
                // If valid, check if it's an @
                if (rollsOfPaper[checkRow][checkCol] === '@') {
                    neighborCount++;
                }
            }
        }

        // STEP 3: Decide
        // The rule: It is accessible if neighbors are FEWER than 4
        if (neighborCount < 4) {
            totalAccessibleRolls++;
        }
    }
}

console.log("Final Answer:", totalAccessibleRolls);


/* ##### Part Two ##### */

let totalRemoved: number = 0;
let changed: boolean = true;

