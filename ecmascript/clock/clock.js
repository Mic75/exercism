
class Clock {
  constructor(h=0, m=0) {
    this._minutesTotal = h * 60 + m;
  }

  plus(minutes){
    this._minutesTotal += minutes;
    return this;
  }

  minus(minutes){
    this._minutesTotal -= minutes;
    return this;
  }

  get minutes() {
    return this._minutesTotal;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }

  toString(){

    let hours = Math.floor( this._minutesTotal / 60 ) % 24;
    let minutes = this._minutesTotal % 60;

    if (this._minutesTotal < 0 ){
      hours = (24 + hours) % 24;
      minutes = (60 + minutes) % 60;
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}`;
  }
}

function at(h=0, m=0){
  return new Clock(h,m);
}

export default at;
