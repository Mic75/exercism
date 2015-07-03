PhoneNumber = function (number) {

    function clean_number(number) {
        var cleaned_num = number.replace(/[\(\)\.\s-]/g, "");
        var wrong_number = "0000000000";

        if (cleaned_num.length < 10 || cleaned_num.length > 11) {
            return wrong_number;
        }

        if (cleaned_num.length === 11) {
            if (cleaned_num[0] === "1") {
                return cleaned_num.substr(1);
            }
            else {
                return wrong_number;
            }
        }
        return cleaned_num;
    }

    this.phone_number = clean_number(number);
};

PhoneNumber.prototype = {
    number: function () {
        return this.phone_number;
    },

    areaCode: function () {
        return this.phone_number.substr(0, 3);
    },

    toString: function () {
        return this.phone_number.replace(/(^\d{3})(\d{3})(\d{4})/g, "($1) $2-$3");
    }
};

module.exports = PhoneNumber;