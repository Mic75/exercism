const RNA_TO_DNA = new Map([
  ['g', 'c'],
  ['c', 'g'],
  ['t', 'a'],
  ['a', 'u']
]);

export default class Transcriptor {
  toRna(strand) {
    let result = '';
    for (let nucleotide of strand) {
      let dna_nucleotide = RNA_TO_DNA.get(nucleotide.toLowerCase());
      if (dna_nucleotide === undefined) { throw Error('Invalid input DNA.'); }
      result += dna_nucleotide;
    }
    return result.toUpperCase();
  }
}

