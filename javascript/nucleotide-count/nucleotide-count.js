var DNA = (function () {
  return function (dna_sequence) {

    //Private members and init
    var sequence = dna_sequence || "";
    var histogram = { A: 0, C: 0, G: 0, T: 0 };

    for (var i = 0, sequence_length = sequence.length; i < sequence_length; i++) {
      var nucleotide = sequence.charAt(i);
      if (Object.keys(histogram).indexOf(nucleotide) === -1) {
        throw new Exception();
      }
      else {
        histogram[nucleotide]++;
      }
    }

    //Public interface
    return {
      count: function (nucleotide) {
        return histogram[nucleotide];
      },
      histogram: function () {
        return histogram;
      }
    };
  }
})();


module.exports = DNA;