export class NucleotideCounts {}

NucleotideCounts.parse = function (dnaSequence)
{
  const nucleotidesCount = dnaSequence.split('').reduce((occurrences, nucleotide) => {
    if (/[^ACGT]/.test(nucleotide)) {
      throw Error('Invalid nucleotide in strand');
    }
    occurrences[nucleotide]++;
    return occurrences;
  }, {A: 0, C: 0, G: 0, T: 0});

  return Object.values(nucleotidesCount).join(' ');
};

