
export default class SecretHandshake {

  constructor(secret) {

    if (typeof secret !== 'number'){
      throw Error('Handshake must be a number');
    }

    this.cmd = [];

    let secretMap = new Map([
      [1, () => this.cmd.push('wink')],
      [2, () => this.cmd.push('double blink')],
      [4, () => this.cmd.push('close your eyes')],
      [8, () => this.cmd.push('jump')],
      [16, () => this.cmd.reverse()],
    ]);

    for (let [key, fnc] of secretMap){
      if ((key & secret) === key){
        fnc();
      }
    }

  }

  commands() {
    return this.cmd;
  }

}