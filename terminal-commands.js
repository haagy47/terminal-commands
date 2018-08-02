const fs = require('fs');
const touch = require('touch');
const mkdir = require('mkdir');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
 };

 module.exports.touch = () => {
   // your code here
 };

 module.exports.mkdir = () => {
   // your code here
 };
