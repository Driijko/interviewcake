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

addUrl("www.website");
console.log(visited["w"]["w"]["w"]["."]["w"]["e"]["b"]["s"]["i"]);

