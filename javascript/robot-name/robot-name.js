class RobotFactory {

  constructor(){
    this._namesLUT = new Array(RobotFactory.CAPACITY);
    this._charLUT = {};
    for (let i= 65 ; i < 91; i++) {
      this._charLUT[String.fromCharCode(i)] = i - 65;
    }
    this.reset();
  }

  _index2Name(index) {

  }

  _name2Index(name) {
    const index = (this._charLUT[name.charAt(0)]*26 + this._charLUT[name.charAt(1)])*1000 + parseInt(name.substr(2), 10);
    return index;
  }

  _getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  _pickup(index) {
    this._latest = index; // save index
    this._namesLUT[index] = true; // flag index
    return this._index2Name(index); // return name matching index
  }

  getNext() {
    let candidate = this._getRandomIntInclusive(0, RobotFactory.CAPACITY); // generate random
    if (this._namesLUT[candidate] === false && Math.abs(candidate - this._latest) > 1) {  // check if not consecutive and available
      return this._pickup(candidate);
    } else {
      for (let i=0 ; i < RobotFactory.CAPACITY ; i++) { // if consecutive or not available, iterate over LUT until good match found
        if (this._namesLUT[candidate] === false && Math.abs(candidate - this._latest) > 1) {
          return this._pickup(candidate);
        }
      }
    }
  }

  releaseName(name) {
    const index = this._name2Index(name);
    this._namesLUT[index] = false;
  }

  reset(){
    this._latest = -2;
    for (let i=0 ; i < RobotFactory.CAPACITY ; i++){
      this._namesLUT[i] = false;
    }
  }
}

RobotFactory.CAPACITY = 675000;

let robotFactory = new RobotFactory();
let _name = new Symbol();

export class Robot {

  constructor(){
    this[_name] = robotFactory.getNext();
  }

  reset(){
    robotFactory.releaseName(this.name);
    this[_name] = robotFactory.getNext();
  }

  get name(){
    return this[_name];
  }
}

Robot.releaseNames = function(){
  robotFactory.reset();
};
