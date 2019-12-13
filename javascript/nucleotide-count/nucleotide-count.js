export class NucleotideCounts {}

NucleotideCounts.parse = function (dnaSequence)
{
  if (/[^ACGT]/.test(dnaSequence)){
    throw Error('Invalid nucleotide in strand');
  }

  const occurrences = {
    A: 0,
    C: 0,
    G: 0,
    T: 0
  };

  dnaSequence.split('').forEach((nucleotide) => occurrences[nucleotide]++);
  return Object.values(occurrences).join(' ').trimEnd();
};

