class Gigasecond {
  constructor(birthdate){
    this.birthdate = birthdate;
  }

  date(){
    let petaMs = this.birthdate.getTime() + Math.pow(10, 12); // 1 giga seconds == 1 peta milliseconds
    let result = new Date();

    result.setTime(petaMs);
    return result;
  }
}

export default Gigasecond;
