var FoodChain = (function () {

    verses = [
        { animal: "fly", comment: "" },
        { animal: "spider", comment: "It wriggled and jiggled and tickled inside her.\n" },
        { animal: "bird", comment: "How absurd to swallow a bird!\n" },
        { animal: "cat", comment: "Imagine that, to swallow a cat!\n" },
        { animal: "dog", comment: "What a hog, to swallow a dog!\n" },
        { animal: "goat", comment: "Just opened her throat and swallowed a goat!\n" },
        { animal: "cow", comment: "I don't know how she swallowed a cow!\n" },
        { animal: "horse", comment: "" }
    ];

    function write_song(song, verse_num) {        
        if (verse_num === 0 || verse_num === verses.length - 1) {
            return song;
        }
        else {
            var extra_comment = verses[verse_num].animal === "bird" ? " that wriggled and jiggled and tickled inside her" : "" ;
            song += "She swallowed the " + verses[verse_num].animal + " to catch the " + verses[verse_num - 1].animal + extra_comment + ".\n";
            return write_song(song, verse_num - 1);
        }
    }

    return {
        verse: function (verse_num) {
            var verse = "I know an old lady who swallowed a " + verses[verse_num - 1].animal + ".\n";
            verse += verses[verse_num - 1].comment;
            verse = write_song(verse, verse_num - 1);
            if (verse_num === verses.length) {
                verse += "She's dead, of course!\n";
            }
            else {
                verse += "I don't know why she swallowed the fly. Perhaps she'll die.\n";
            }
            return verse;
        },
        verses: function (from, to) {
            var verses = ""
            for (var i = from; i <= to; i++) {
                verses += this.verse(i) + "\n";
            }
            return verses;
        }
    }

})();

module.exports = FoodChain;