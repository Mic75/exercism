class PrimeFactors {
  for(value) {
    let dividend = value;
    let factors = [];
    let currentDivisor = 2;
    while (dividend !== 1) {
      if (dividend % currentDivisor === 0) {
        factors.push(currentDivisor);
        dividend /= currentDivisor;
      } else {
        currentDivisor++;
      }
    }
    return factors;
  }
}

export default PrimeFactors;