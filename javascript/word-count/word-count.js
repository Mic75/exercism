function prepareInput(input) {
  return input.toLowerCase()
    .replace(/[\n\t,\!\&@\$%\^:\.]/g, " ")
    .replace(/'(\w{2,})'/g, "$1")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");
}

export function countWords(input) {
  let splitInput = prepareInput(input);
  let wordCount = splitInput.length;
  let occurrences = {};

  for (let i = 0; i < wordCount; i++) {
    const word = splitInput[i];
    const count = occurrences[word] || 0;
    occurrences[word] = count + 1;
  }
  return occurrences;
}
