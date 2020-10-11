const fs = require("fs");

function findDuplicateFiles(startingDirectory) {
  const filesAlreadySeen = {};
  let stack = [startingDirectory];
  let duplicates = [];

  while(stack.length) {
    currentPathName = stack.pop();
    currentPath = fs.statSync(currentPathName);

    if (currentPath.isFile()) {
      const fileContents = fs.readFileSync(currentPathName);
      const currentLastEditedTime = currentPath.mtime;

      if (filesAlreadySeen.hasOwnProperty(fileContents)) {
        const existingFile = filesAlreadySeen[fileContents];

        if (currentLastEditedTime > existingFile.lastEditedTime) {
          duplicates.push([currentPathName, existingFile.path]);
        }
        else {
          duplicates.push([existingFile.path, currentPath]);
          filesSeenAlready[fileContents] = {
            lastEditedTime : currentLastEditedTime,
            path : currentPathName
          }
        }
      }
      else {
        filesAlreadySeen[fileContents] = {
          lastEditedTime: currentLastEditedTime,
          path: currentPathName
        }
      }
    }
    else if (currentPath.isDirectory()) {
      const directoryContents = fs.readdirSync(currentPathName);
      directoryContents.forEach(path => {
        stack.push(`${currentPathName}/${path}`);
      })
    }
  }

  return duplicates;
}

console.log(findDuplicateFiles("./Test Folder"));