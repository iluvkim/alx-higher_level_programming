#!/usr/bin/node
const size = Math.floor(Number(process.argv[2]));
if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let m = 0; m < size; m++) {
    let row = '';
    for (let d = 0; d < size; d++) row += 'X';
    console.log(row);
  }
}
