const existingLinks = new Set();

function shortenUrl() {
  let url = "https://ca.ke/";
  let link = rand7CharString();
  while (existingLinks.has(link)) {
    link = rand7CharString();
  }
  existingLinks.add(link);
  return url + link;
}

function rand7CharString() {

  let string = "";

  for (let i = 0 ; i < 7 ; i++) {
    let charNum = randInt(0, 62) + 48;
    if (charNum > 57) {
      charNum += 7;
    }
    if (charNum > 90) {
      charNum += 6;
    }
    const char = String.fromCharCode(charNum);
    string += char;
  }
  return string;
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}