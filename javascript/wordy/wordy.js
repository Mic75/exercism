class ArgumentError extends Error {}

class WordProblem {
  constructor(question){
    this.question = question;
  }

  _isInvalid(){
    return !_validationRegex.test(this.question);
  }

  answer() {

    if (this._isInvalid()){
      throw new ArgumentError();
    }

    let operands = this.question.match(_operandsRegEx) || [];
    operands = operands.map(o => parseInt(o, 10));

    const operators = this.question.match(_operators) || [];

    if (operators.length === 0 && operands.length === 1){
      return operands[0];
    }

    let result = _operations[operators[0]](operands[0], operands[1]);

    for (let i=2 ; i < operands.length; i++){
      result = _operations[operators[i-1]](result, operands[i]);
    }
    return result;
  }
}

const _validationRegex = /What is -?\d+ ((plus|minus|multiplied by|divided by) -?\d+\s?)+\?/;

const _operandsRegEx = /-?\d+/g;

const _operations = {
  "plus": (a,b) => a + b,
  "minus": (a, b) => a - b,
  "multiplied by": (a,b) => a*b,
  "divided by": (a,b) => a/b
};

const _operators = /(plus|minus|multiplied by|divided by)/g;

export { ArgumentError, WordProblem }
