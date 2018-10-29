class ArgumentError extends Error {}

class WordProblem {
  constructor(question){
    this.question = question;
    this._expressionRegEx = /(-?\d+) (plus|minus|multiplied by|divided by) (-?\d+)/;
  }

  answer() {
    let matches = this.question.match(this._expressionRegEx);
    return this[`_${matches[2]}`](parseInt(matches[1]), parseInt(matches[3]));
  }

  _plus(a,b) {
    return a + b;
  }

  _minus(a,b) {
    return a - b;
  }

  ["_multiplied by"](a,b) {
    return a * b;
  }

  ["_divided by"](a,b) {
    return a / b;
  }
}

export { ArgumentError, WordProblem }