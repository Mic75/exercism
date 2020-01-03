class RobotFactory {

  constructor() {
    this._names = new Array(RobotFactory.CAPACITY);
    this.cursor = 0;
    const lastNumberSequence = [0,2,4,6,8,1,3,5,7,9];
    let c = 0;
    for (let i = 65; i < 91; i++) {
      for (let j = 65; j < 91; j++) {
        for (let k = 0; k < 1000; k++) {
          let number = k.toString(10).padStart(3, "0").substr(0,2) + lastNumberSequence[k%10].toString(10);
          this._names[c] = String.fromCharCode(i) + String.fromCharCode(j) + number;
          c++;
        }
      }
    }
  }

  reset()
  {
    this.cursor = 0;
  }

  getNext() {
    if (this.cursor < RobotFactory.CAPACITY) {
      this.cursor++;
      return this._names[this.cursor];
    }
    else {
      throw Error("No more robot name available");
    }
  }
}

RobotFactory.CAPACITY = 676000;

let robotFactory = new RobotFactory();
let _name = Symbol();

export class Robot {

  constructor() {
    this[_name] = robotFactory.getNext();
  }

  reset() {
    this[_name] = robotFactory.getNext();
  }

  get name() {
    return this[_name];
  }
}

Robot.releaseNames = function () {
  robotFactory.reset();
};
