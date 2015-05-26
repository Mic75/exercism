//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
    input = input.trim() || "";
    
    if (/^[^\xfc\xe4][\W\d\s]*[A-Z]+[A-Z\s\W\d]*[!|?]?$/.test(input)) {
        return "Whoa, chill out!";
    }
    else if (/.*\?$/.test(input)) {
        return "Sure.";
    }
    else if (input === "") {
        return "Fine. Be that way!";
    }
    else {
        return "Whatever.";
    }

};

module.exports = Bob;