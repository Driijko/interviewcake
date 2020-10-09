class Trie {
  addWord(word) {
    let editedWord = word;
    if (word[0] === "w" && word[1] === "w" && word[2] === "w") {
      editedWord = word.slice(4);
    }
    return editedWord;
  }
}

const trie = new Trie();
console.log(trie.addWord("www.website"));

