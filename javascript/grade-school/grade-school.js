var School = function () {
    this.school_roster = {};
};

School.prototype = {
    roster: function () {
        return this.school_roster;
    },
    add: function (student, grade) {
        students_in_grade = this.school_roster[grade];
        if (typeof students_in_grade === "undefined") {
            this.school_roster[grade] = [student];
        }
        else {
            this.school_roster[grade].push(student);
        }
    },
    grade: function (grade) {
        var enrolled = this.school_roster[grade];
        if (typeof enrolled !== "undefined" ){
            return enrolled.sort();
        }
        else {
            return [];
        }
    }
};

module.exports = School;