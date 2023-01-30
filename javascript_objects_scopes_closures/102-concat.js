#!/usr/bin/node
onst fs = require("fs");

if (process.argv.length !== 5) {
console.error("Usage: 102-concat.js <fileA> <fileB> <destination>");
process.exit(1);
}

const [fileA, fileB, destination] = process.argv.slice(2);

fs.readFile(fileA, "utf-8", (errorA, dataA) => {
if (errorA) {
console.error(errorA);
process.exit(1);
}

fs.readFile(fileB, "utf-8", (errorB, dataB) => {
if (errorB) {
console.error(errorB);
process.exit(1);
}
});
});  
