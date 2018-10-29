class ArgumentError extends Error {}

class WordProblem {
  constructor(question){
    this.question = question;
    this._operationsMapping = new Map([
      ['plus', '_add'],
      ['minus', '_subtract']
    ]);
  }

  answer() {
    let matches = this.question.match(/(\d+) (plus|minus) (\d+)/);
    return this[this._operationsMapping.get(matches[2])](parseInt(matches[1]), parseInt(matches[3]));
  }

  _add(a,b) {
    return a + b;
  }
}

export { ArgumentError, WordProblem }