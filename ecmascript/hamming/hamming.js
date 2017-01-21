class Hamming {
  compute(strandA, strandB){

    if(strandA.length !== strandB.length){
      throw Error("DNA strands must be of equal length.");
    }

    let distance =0;

    for (let i=0, l = strandA.length; i < l ; i++){
      if (strandA.charAt(i) !== strandB.charAt(i)) {
        distance++;
      }
    }

    return distance;
  }
}

export default Hamming;
