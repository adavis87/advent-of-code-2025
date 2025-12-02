import * as fs from 'fs';

export function fileHanlder(input) {
    return fs.readFileSync(input, 'utf-8');
}
