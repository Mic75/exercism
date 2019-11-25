class ArgumentError extends Error {}

class WordProblem {
  constructor(question){
    this.question = question;
    this._operandsRegEx = /-?\d+/g;
    this._operations = {
      "plus": (a,b) => a + b,
      "minus": (a, b) => a - b,
      "multiplied by": (a,b) => a*b,
      "divided by": (a,b) => a/b
    };

    this._operators = /(plus|minus|multiplied by|divided by)/g;
  }

  answer() {
    let operands = this.question.match(this._operandsRegEx) || [];
    operands = operands.map(o => parseInt(o));
    let operators = this.question.match(this._operators) || [];

    if (operators.length === 0 || operands.length < 2){
      throw new ArgumentError();
    }

    let result = this._operations[operators[0]](operands[0], operands[1]);

    for (let i=2 ; i < operands.length; i++){
      result = this._operations[operators[i-1]](result, operands[i]);
    }
    return result;
  }
}

export { ArgumentError, WordProblem }
