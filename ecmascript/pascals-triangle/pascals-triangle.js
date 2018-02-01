
export default class Triangle {

  constructor(rowsCount){
    this.rows = [];
    for(let i = 0 ; i < rowsCount ; i++){
      let row = [];
      for (let j = 0 ; j <= i  ; j++) {
        if (i <= 1 || j === 0 || j === i) {
          row.push(1);
        } else {
          row.push(this.rows[i-1][j] + this.rows[i-1][j-1]);
        }
      }
      this.rows.push(row);
    }
    this.lastRow = this.rows[rowsCount-1];
  }
}