var School = function () {
    this.school_roster = {};
};

Array.prototype.sorted_insert = function (elem) {
    for (var i = 0, l = this.length ; i < l ; i++) {
        if (elem < this[i]) {
            this.splice(i, 0, elem);
            return;
        }
    }
    this.push(elem);
}

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
            this.school_roster[grade].sorted_insert(student);
        }
    },
    grade: function (grade) {
        return this.school_roster[grade] || [];
    }
};

module.exports = School;