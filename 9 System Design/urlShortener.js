const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let slugCount = 62 * 62 * 62 + 62;

function shortenUrl() {
  return "https://ca.ke/" + generateSlug();
}

function generateSlug() {
  const charNum = 7;
  const base = 62;
  let slug = "";
  for (let i = charNum; i > 0 ; i--) {
    slug += alphabet[Math.floor(slugCount % Math.pow(base, i) / Math.pow(base, i - 1))]
  }
  slugCount++;
  return slug;
}

console.log(shortenUrl(), slugCount);