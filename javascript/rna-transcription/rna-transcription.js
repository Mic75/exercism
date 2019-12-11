const RNA_TO_DNA = { G: 'C', C: 'G', T: 'A', A: 'U' };

const tryTranscribeNucleotid = nucleotid => {
  const transcribedNucleotid = RNA_TO_DNA[nucleotid];
  if(!transcribedNucleotid)
    throw new RangeError(`Unknown nucleotid ${nucleotid}.`);
  return transcribedNucleotid;
};

export function toRna(strand) {
  return [...strand]
    .map(tryTranscribeNucleotid)
    .join('');
}
