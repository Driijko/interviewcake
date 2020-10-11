// Import Modules ///////////////////////////////////////////////////////////////
const fs = require("fs");
const crypto = require("crypto");

function findDuplicateFiles(startingDirectory) {

  // Initialize variables ///////////////////////////////////////////////////////
  const filesAlreadySeen = {};
  let stack = [startingDirectory];
  let duplicates = [];

  // Main loop: move iteratively through every path ////////////////////////////
  while(stack.length) {

    currentPath = stack.pop();
    currentPathAnalysis = fs.statSync(currentPath);

    // Current Path is file
    if (currentPathAnalysis.isFile()) {

      const filePath = currentPath;
      const fileAnalysis = currentPathAnalysis;

      const fileHash = sampleHashFile(filePath);
      const currentLastEditedTime = fileAnalysis.mtime;

      // We check to see if we have already seen these file contents before
      if (filesAlreadySeen.hasOwnProperty(fileHash)) {
        const existingFile = filesAlreadySeen[fileHash];

        // We compare last edited time to determine which is a copy.
        if (currentLastEditedTime > existingFile.lastEditedTime) {
          duplicates.push([filePath, existingFile.path]);
        }
        else {
          duplicates.push([existingFile.path, filePath]);
          filesSeenAlready[fileHash] = {
            lastEditedTime : currentLastEditedTime,
            path : filePath
          }
        }
      }
      // If we haven't seen the file contents before, we now add them to our
      // 'filesAlreadySeen' object. 
      else {
        filesAlreadySeen[fileHash] = {
          lastEditedTime: currentLastEditedTime,
          path: filePath
        }
      }
    }
    // Current path is directory
    else if (currentPathAnalysis.isDirectory()) {
      const directoryContents = fs.readdirSync(currentPath);
      directoryContents.forEach(path => {
        stack.push(`${currentPath}/${path}`);
      })
    }
  }

  return duplicates;
}

console.log(findDuplicateFiles("./Test Folder"));

function sampleHashFile(path) {
  const file = fs.statSync(path);

  const sampleSize = 4000;
  const totalBytes = file.size;

  const hash = crypto.createHash("sha512");

  if (totalBytes < sampleSize * 3) {
    hash.update(fs.readFileSync(path));
  }
  else {
    const numBytesBetweenSamples = (totalBytes - sampleSize * 3) / 2;
    const buffer = Buffer.alloc(sampleSize * 3);

    for (let offsetMultiplier = 0; offsetMultiplier <= 2 ; offsetMultiplier++) {
      const fd = fs.openSync(path, "r");

      const offset = offsetMultiplier * sampleSize;
      const position = offsetMultiplier * (sampleSize + numBytesBetweenSamples);

      fs.readSync(fd, buffer,offset,sampleSize, position);
    }

    hash.update(buffer);
  }

  return hash.digest;
}