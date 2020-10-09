const fs = require("fs");

// fs.readFile("testFile.js", "utf8", function(err, data) {
//   console.log(data);
// });

// fs.writeFile("testFile2.js", "console.log('help')", function(err) {
//   console.log("we good");
// });

// fs.appendFile("testFile2.js", "console.log('no')", function(err) {
//   console.log("and again");
// })

// fs.unlink("testFile2.js", function(err) {
//   console.log("deleted");
// })

function findDuplicateFiles(startingDirectory) {
  const filesAlreadySeen = {};
  let stack = [startingDirectory];
  let duplicates = [];

  while(stack.length) {
    currentDirectory = stack.pop();
  }

  return duplicates;
}