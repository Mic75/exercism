
function isUpperChar(char) { return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90; }

function extractChars(word){
  let extracted;
  extracted = word.split('')
                  .filter((char, index, array) => index === 0 || ( isUpperChar(char) && !isUpperChar(array[index - 1])))
                  .map((char) => char.toUpperCase());
  return extracted;
}

function parse(phrase){
  let acronym;

  acronym = phrase.split(/[\s,-:]/)
    .map(extractChars)

  return [].concat(...acronym).join('');
}

export default { parse }
