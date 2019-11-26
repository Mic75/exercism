const RNA_TO_DNA = { G: 'C', C: 'G', T: 'A', A: 'U' };

export function toRna(strand) {
  return strand.split("")
    .map(nucleotide => RNA_TO_DNA[nucleotide])
    .join('');
}
