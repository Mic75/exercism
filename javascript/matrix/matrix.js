export class Matrix {
  constructor(stringMatrix){
    this.rows = stringMatrix.split('\n').map(stringRow => stringRow.split(' ').map(val => Number(val)));
    this.columns = [];
    const rowCount = this.rows.length;
    const colCount = this.rows[0].length;

    this.rows[0].forEach(val => this.columns.push([val]));

    for (let i = 1 ; i < rowCount ; i++) {
      for (let j = 0 ; j < colCount ; j++){
        this.columns[j][i] = this.rows[i][j];
      }
    }
  }
}
