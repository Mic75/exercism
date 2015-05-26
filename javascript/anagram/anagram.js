module.exports = function (input) {

    var anagrams = [];

    (function (input) {
        var input_length = input.length,
            used = new Array(input_length),
            output = "";

        for (var i = 0; i < input_length; i++) {
            used[i] = false;
        }

        (function permute() {
            if (output.length !== input_length) {                                        
                for (var i = 0; i < input_length; i++) {
                    if (used[i] === true) {
                        continue;
                    }
                    output += input.charAt(i);
                    used[i] = true;
                    permute();
                    used[i] = false;
                    output = output.substr(0, output.length - 1);
                }
            }
            else if (output !== input) {
                anagrams.push(output);
            }
        })();
    }) (input.toLowerCase());

    return {
        matches: function (candidates) {
            var matches = [];
            candidates = typeof (candidates) === "object" ? candidates : Array.prototype.slice.call(arguments);
            for (var i = 0, len = candidates.length; i < len; i++) {
                for (var j = 0, count = anagrams.length ; j < count; j++) {
                    if (candidates[i].toLowerCase() === anagrams[j]) {
                        matches.push(candidates[i]);
                        break;
                    }
                }
            }
            return matches;
        }
    }
};
