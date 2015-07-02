var transcriptor = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
};

function toRNA(dna) {
    var rna_strand = "", dna_length;
    for (i = 0, dna_length = dna.length; i < dna_length ; i++) {
        rna_strand += transcriptor[dna[i]];
    }
    return rna_strand;
}

module.exports = toRNA;