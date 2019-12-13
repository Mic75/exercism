import BigInt from './lib/big-integer';

export class Grains {

  constructor(){
    this.squares = [BigInt(1)];
    this.grainsTotal = null;
  }

  square(pos){
    let squaresCount = this.squares.length;
    if ( pos > squaresCount){
      while (squaresCount < pos){
        this.squares.push(this.squares[squaresCount-1].multiply(2));
        squaresCount++;
      }
    }
    return this.squares[pos-1].toString();
  }

  total(){
    if(this.grainsTotal === null){
      this.square(64); // force squares to be filled;
      this.grainsTotal = this.squares.reduce((prev, next) => prev.add(next));
    }

    return this.grainsTotal.toString();
  }

}
