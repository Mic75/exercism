export function isPangram(sentence) {

  // ascii alpha 97 -> 122
  let alphabet = {};
  for (let code = 97; code <= 122; code++) {
    alphabet[code] = 0;
  }

  sentence = sentence.toLowerCase();
  for (let c of sentence) {
    let code = c.charCodeAt(0);

    if (code >= 97 && code <= 122)
      alphabet[code] += 1;
  }

  return Object.values(alphabet).every((occurence) => occurence > 0);
}


