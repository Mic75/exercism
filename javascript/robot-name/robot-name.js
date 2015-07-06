module.exports = (function () {

    function get_random_int(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function get_bigram() {
        return String.fromCharCode(get_random_int(65, 91),get_random_int(65, 91));
    }

    function get_serial() {
        return new Intl.NumberFormat('en-US', { minimumIntegerDigits: 3 }).format(get_random_int(0, 1000));
    }

    function get_new_name() {
        return get_bigram() + get_serial();
    }

    var Robot = function () {
        this.name = get_new_name();
    };

    Robot.prototype = {
        reset: function () {
            this.name = get_new_name();
        }
    };
    return Robot;
})();