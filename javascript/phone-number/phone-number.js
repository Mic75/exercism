export class PhoneNumber {

    constructor(number) {
        this.phone_number = this._cleanNumber(number);
    }

    number() {
       return this.phone_number;
    }

    _cleanNumber(number){
        try {
            let cleanedNum = number.replace(/[\(\)\.\s-+]/g, "").match(/\d+/)[0];

            if (cleanedNum.length === 11 && cleanedNum[0] === "1") {
                cleanedNum = cleanedNum.substr(1);
            }

            if (cleanedNum.length === 10 && !/[0-1]/.test(cleanedNum[0]) && !/[0-1]/.test(cleanedNum[3])) {
                return cleanedNum;
            }

            return null;
        }
        catch {
            return null;
        }
    }
}