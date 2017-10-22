const DEFAULT_KEY_LENGTH = 100;
const FCC = 97;   // First char ascii code (ex: 97 for  'a')
const LCC = 122;  // Last char ascii code (ex: 122 for 'z')
const SC = LCC - FCC + 1; // Count of available symbols for the key and secret (ex: 26 for occidental alpha char)

function generateKey() {
  let key = '';
  for (let i = 0; i < DEFAULT_KEY_LENGTH; i++) {
    key += String.fromCharCode(Math.floor(Math.random() * (LCC + 1  - FCC)) + FCC); // rand value in [FCC;LCC[ interval
  }
  return key;
}

export default class Cipher {

  constructor(key = generateKey()) {
    if (/\d|[A-Z]/.test(key) || key.length === 0) {
      throw Error('Bad key');
    }
    this.key = key;
  }

  encode(secret) {
    let encoded_secret = '';
    for (let i = 0, l = secret.length; i < l; i++) {
      encoded_secret += String.fromCharCode(((secret.charCodeAt(i) - FCC + this.key.charCodeAt(i%this.key.length) - FCC) % SC) + FCC);
    }
    return encoded_secret;
  }

  decode(secret) {
    let decoded_secret = '';
    for (let i = 0, l = secret.length; i < l; i++) {
      decoded_secret += String.fromCharCode(((secret.charCodeAt(i) - this.key.charCodeAt(i%this.key.length) + SC) % SC) + FCC);
    }
    return decoded_secret;
  }

}