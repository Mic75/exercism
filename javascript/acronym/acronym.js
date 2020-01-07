export const parse = (phrase) => {
  return phrase
    .toLowerCase()
    .match(/['a-z]+/g)
    .reduce((prev, curr) => prev += curr[0].toUpperCase(), "");
};
