function transform(oldModel){
  let newModel = {};

  Object.entries(oldModel).forEach(([score, letters]) => {
    letters.forEach((letter) => {
      newModel[letter.toLowerCase()] = Number(score);
    })
  });
  return newModel;
}

export default transform;

