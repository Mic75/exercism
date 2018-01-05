
class Binary {
  constructor(value) {
    if (/[2-9a-zA-Z\W]/.test(value) === true){
      this.value = "0";
    } else {
      this.value = value;
    }
  }

  toDecimal(){
    const lastIdx = this.value.length - 1;
    return this.value.split('').reduceRight((prev, curr, idx) =>  prev + curr * Math.pow(2, lastIdx - idx), 0 );
  }

}

export default Binary;