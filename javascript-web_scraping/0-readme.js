#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv[2];
fs.readFile(filePath, 'utf-8', (err, contents) => {
  err ? console.log(err):console.log(contents.toString());
});
