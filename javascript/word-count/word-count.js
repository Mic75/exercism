function prepareInput(input) {
  return input.toLowerCase()
    .match(/['a-z0-9]+/g)
    .map(word => word.replace(/^'(.*)'$/g, "$1"));
}

export function countWords(input) {
  let splitInput = prepareInput(input);

  return splitInput.reduce((occurrences, word) => {
    const count = occurrences[word] || 0;
    occurrences[word] = count + 1;
    return occurrences;
  }, {})
}
