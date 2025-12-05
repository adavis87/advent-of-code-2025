import * as fs from 'fs';

export function fileHandler(input) {
    return fs.readFileSync(input, 'utf-8');
}
