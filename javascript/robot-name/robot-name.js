class RobotFactory {

  constructor(){
    this.remaining = RobotFactory.CAPACITY;
    this._namesLUT = new Array(RobotFactory.CAPACITY);
    this._charLUT = {};
    for (let i= 65 ; i < 91; i++) {
      this._charLUT[String.fromCharCode(i)] = i - 65;
    }
    this.reset();
  }

  _index2Name(index) {
    const suffix = (index % 1000).toString().padStart(3, "0");
    index = index - index % 1000;
    let prefix = "AA";

    if (index > 0){
      if (index < 25000) {
        prefix = "A" + String.fromCharCode(Math.floor(index / 1000) + 65);
      } else {
        prefix = String.fromCharCode(Math.floor(index /25000) + 65) + String.fromCharCode(Math.floor((index % 25000) / 1000) + 65);
      }
    }
    return prefix + suffix;
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
    this.remaining--;
    console.log(this.remaining);
    return this._index2Name(index); // return name matching index
  }

  getNext() {
    let candidate = this._getRandomIntInclusive(0, RobotFactory.CAPACITY); // generate random
    if (this._namesLUT[candidate] === false && Math.abs(candidate - this._latest) > 1) {  // check if not consecutive and available
      return this._pickup(candidate);
    } else {
      for (let i=0 ; i < RobotFactory.CAPACITY ; i++) { // if consecutive or not available, iterate over LUT until good match found
        if (this._namesLUT[i] === false && Math.abs(i - this._latest) > 1) {
          return this._pickup(i);
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
    this.remaining = RobotFactory.CAPACITY;
    for (let i=0 ; i < RobotFactory.CAPACITY ; i++){
      this._namesLUT[i] = false;
    }
  }
}

RobotFactory.CAPACITY = 675000;

let robotFactory = new RobotFactory();
let _name = Symbol();

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
