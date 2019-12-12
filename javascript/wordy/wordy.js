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

    let result = operands[0];

    for (let i=1 ; i < operands.length; i++){
      result = _operations[operators[i-1]](result, operands[i]);
    }
    return result;
  }
}

const _operations = {
  "plus": (a,b) => a + b,
  "minus": (a, b) => a - b,
  "multiplied by": (a,b) => a*b,
  "divided by": (a,b) => a/b
};

function buildOperatorCaptureGroup(operators){
  return `(${operators.join('|')})`;
}

const operatorsCaptureGroup = buildOperatorCaptureGroup(Object.keys(_operations));

const _validationRegex = RegExp(`What is -?\\d+ (${operatorsCaptureGroup} -?\\d+\\s?)+\\?`);

const _operators = RegExp(operatorsCaptureGroup, 'g');

const _operandsRegEx = /-?\d+/g;

export { ArgumentError, WordProblem }
