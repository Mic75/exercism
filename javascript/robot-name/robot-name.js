export class Robot {

  constructor(){
    this[_name] = giveUniqueName();
  }

  reset(){
    //usedNames.delete(this.name);
    this[_name] = giveUniqueName();
  }

  get name(){
    return this[_name];
  }

}

// PRIVACY

const _name = Symbol('name');
const _usedNames = new Set();

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function prefixCodes() {
  return [
    getRandomIntInclusive(65,90),
    getRandomIntInclusive(65,90)
  ];
}

function prefix(){
  return String.fromCharCode(...prefixCodes());
}

function suffix(){
  return Number(getRandomIntInclusive(0,999)).toString().padStart(3, '0');
}

function giveUniqueName() {
  let name;

  do {
    name = prefix() + suffix();
  } while(_usedNames.has(name));

  _usedNames.add(name);
  return name;
}

Robot.releaseNames = () => {
  _usedNames.clear();
};
