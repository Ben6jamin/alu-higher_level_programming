#!/usr/bin/node
const content = `${dataA}\n${dataB}`;

fs.writeFile(destination, content, errorC => {
  if (errorC) {
    console.error(errorC);
    process.exit(1);
  }

  console.log(`The contents of fileA and fileB have been concatenated and saved in file ${destination}`);
});
