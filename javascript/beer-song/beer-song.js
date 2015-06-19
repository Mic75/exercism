var BeerSong = (function () {    
    var verse =  function (num) {
        var remaining = num - 1, article = "one", plural = "bottles", pluralRemaining = plural, res = "";
        if (num == 2) {
            pluralRemaining = plural.slice(0, -1)
        }
        else if (num <= 1) {
            remaining = "no more";
            article = "it";
            plural = plural.slice(0, -1);                
        }
                        
        if (num === 0) {
            res = "No more bottles of beer on the wall, no more bottles of beer.\n";
            res += "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
        }
        else {
            res = num + " " + plural + " of beer on the wall, " + num + " " + plural + " of beer.\n";
            res += "Take " + article + " down and pass it around, " + remaining + " " + pluralRemaining + " of beer on the wall.\n";
        }            
        return res;
    };

    var sing = function (from, to) {

        from = from || 99;
        to = to || 0;

        var res = "";
        for (var i = from; i > to ; i--) {
            res += verse(i) + "\n";
        }
        res += verse(to);
        return res;
    }

    return {
        verse: verse,
        sing: sing
    };

})();

module.exports = BeerSong;