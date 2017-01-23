function transform(oldModel){
  let newModel = {};

  for(let score in oldModel){

    if(oldModel.hasOwnProperty(score)){
      let letters = oldModel[score];

      letters.forEach((letter) => {
        newModel[letter.toLowerCase()] = parseInt(score);
      });
    }
  }

  return newModel;
}

export default transform;

