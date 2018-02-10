
export default class {

  constructor(){
    this._roster = {};
  }

  roster() {
    return  JSON.parse(JSON.stringify(this._roster));
  }

  add(studentName, grade) {
    this._roster[grade] = [studentName].concat(this._roster[grade] || []).sort();
  }

  grade(grade) {
    return this._roster[grade] ? this._roster[grade].slice() : [];
  }

}