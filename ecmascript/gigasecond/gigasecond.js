class Gigasecond {
  constructor(birthdate){
    this.gigaDate = new Date(birthdate.getTime() + Math.pow(10, 12)); // 1 giga seconds == 1 peta milliseconds
  }

  date(){
    return this.gigaDate;
  }
}

export default Gigasecond;
