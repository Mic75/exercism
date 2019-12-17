function prepareInput(input) {
  return input.toLowerCase()
    .replace(/[\n\t,\!\&@\$%\^:\.]/g, " ")
    .replace(/'(\w{2,})'/g, "$1")
    .match(/\S+/g);
}

export function countWords(input) {
  let splitInput = prepareInput(input);

  return splitInput.reduce((occurrences, word) => {
    const count = occurrences[word] || 0;
    occurrences[word] = count + 1;
    return occurrences;
  }, {})
}
