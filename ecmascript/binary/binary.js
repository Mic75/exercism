
class Binary {
  constructor(value) {
    this.value = /[2-9a-zA-Z\W]/.test(value) ? "0" : value;
  }

  toDecimal(){
    const lastIndex = this.value.length - 1;
    return this.value.split('').reduceRight((prev, bit, index) =>  prev + bit * 2 ** (lastIndex - index), 0 );
  }

}

export default Binary;