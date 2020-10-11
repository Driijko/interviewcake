class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  updateWordCount(word) {
    if (this.wordsToCounts.has(word)) {
      const newValue = this.wordsToCounts.get(word) + 1;
      this.wordsToCounts.set(word, newValue);
    }
    else this.wordsToCounts.set(word, 1);
  }

  populateWordsToCounts(inputString) {
    let currentWord = "";

    for (let i = 0 ; i < inputString.length; i++) {

      let charAscii = inputString.charCodeAt(i);

      if (charAscii >= 65 && charAscii < 91) {
        charAscii += 32;
      }

      if ((charAscii >= 97 && charAscii < 123)
          || (charAscii === 39 || charAscii === 45) && currentWord !== "") {
        const char = String.fromCharCode(charAscii);
        currentWord += char;
      }
      else if (currentWord !== "") {
        this.updateWordCount(currentWord);
        currentWord=""; 
      }

      if (i === inputString.length - 1 && currentWord !== "") {
        this.updateWordCount(currentWord);
      }
    }
    console.log(this.wordsToCounts);
  }
} 

const string = "I love Sasha's singing and I LOVE Mary-Lynn's JUMPING JUMping (JUMPing)";

const wordCloudData = new WordCloudData(string);