const visited = {};

function addUrl(url) {
  visited[url[0]] = {};
  let nestedPosition = visited[url[0]];
  for (let i = 1 ; i < url.length; i++) {
    const currentChar = url[i];
    if (!(nestedPosition[currentChar])) {
      nestedPosition[currentChar] = {};
    }
    nestedPosition = nestedPosition[currentChar];
  }
  nestedPosition["*"] = true;
}

class Trie {
  constructor() {
    this.rootNode = {};
  }
  addWord(word) {
    let currentNode = this.rootNode;
    let isNewWord = false;

    for (let i = 0 ; i < word.length ; i++) {
      if (!(currentNode.hasOwnProperty(word[i]))) {
        isNewWord = true;
        currentNode[word[i]] = {};
      }
      currentNode = currentNode[word[i]];
    }

    if (!(currentNode.hasOwnProperty("End of Word"))) {
      isNewWord = true;
      currentNode["End of Word"] = true;
    }

    return isNewWord;
  }
}



