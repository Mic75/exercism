class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  kind () {
    // sides validation
    if ( this.sides.some((side) => side <= 0 ) || violateTriangleInequality(...this.sides)){
      throw TypeError('Invalid triangle sides parameter(s)');
    }

    // determine kind
    let [a,b,c] = this.sides;
    if(a === b && c === b){
      return 'equilateral';
    }
    else if (a === b || a === c || b === c ) {
      return  'isosceles';
    }
    else {
      return 'scalene';
    }
  }
}

// private functions
function violateTriangleInequality(a,b,c){
  return (a <= b + c && b <= a + c && c <= a + b) === false ;
}

module.exports = Triangle;
