var Hamming = function () { };
Hamming.prototype.compute = function (strand1, strand2) {
    var strand_length = strand1.length;
    if (strand_length !== strand2.length) {
        throw new Error("DNA strands must be of equal length.");
    }

    var distance = 0;
    for (var i = 0; i < strand_length ; i++) {
        if (strand1.charAt(i) !== strand2.charAt(i)) {
            distance++;
        }
    }
    return distance;
};
module.exports = Hamming.prototype;