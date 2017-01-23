class Pangram {
  constructor(sentence) {
    this.pangram = false;

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

    this.pangram = Object.values(alphabet).every((occurence) => occurence > 0);
  }

  isPangram() {
    return this.pangram;
  }
}

export default Pangram;