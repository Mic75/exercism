
function isPrime(value){
  let divisor = value - 1;
  while (value%divisor !== 0){
    divisor--;
  }
  return divisor === 1;
}

class PrimeFactors {
  for(value) {
    let dividend = value;
    let factors = [];
    let currentDivisor = 2;
    while (dividend !== 1){
      if (dividend%currentDivisor === 0){
        if (isPrime(currentDivisor)) {
          factors.push(currentDivisor);
        }
        dividend = dividend / currentDivisor;
      } else {
        currentDivisor += 1;
      }
    }
    return factors;
  }
}

export default PrimeFactors;