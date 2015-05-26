
function prepare_input(input) {
    return input.replace(/[\n\t]/m, " ")
                .replace(/\s+/, " ")
                .split(" ");
}

var words = function (input) {
    splitted_input = prepare_input(input),
    word_count = splitted_input.length,
    words_stats = {},
    current_count = null;

    for (var i = 0; i < word_count ; i++) {
        current_count = words_stats.hasOwnProperty( splitted_input[i] ) ? words_stats[ splitted_input[i] ] : 0;
        words_stats[ splitted_input[i] ] = current_count === 0 ? 1 : current_count + 1;
    }
    return words_stats;

};

module.exports = words;

