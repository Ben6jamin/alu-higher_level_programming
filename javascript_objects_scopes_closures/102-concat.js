#!/usr/bin/env node
const fs = require('fs');
let sourceFile1 = process.argv[2];
let sourceFile2 = process.argv[3];
let destinationFile = process.argv[4];

fs.readFile(sourceFile1, 'utf8', (err, data1) => {
  if (err) throw err;
  fs.readFile(sourceFile2, 'utf8', (err, data2) => {
    if (err) throw err;
    fs.writeFile(destinationFile, data1 + data2, (err) => {
      if (err) throw err;
      console.log(`${sourceFile1} and ${sourceFile2} have been concatenated and saved to ${destinationFile}`);
    });
  });
});
