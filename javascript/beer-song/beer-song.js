var BeerSong = (function () {    
    return {
        verse: function (num) {

            var remaining = num - 1, article = "one", plural = "bottles", res = "";
            if (num <= 1) {
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
                res += "Take " + article + " down and pass it around, " + remaining + " bottles of beer on the wall.\n";
            }            
            return res;
        }
    };

})();

module.exports = BeerSong;