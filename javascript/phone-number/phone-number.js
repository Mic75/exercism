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

PhoneNumber = function (number) {
    this.phone_number = clean_number(number);
};

PhoneNumber.prototype.number = function () {
    return this.phone_number;
};

module.exports = PhoneNumber;