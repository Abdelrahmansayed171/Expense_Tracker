export default (num) =>{
    let p = num.toFixed(2).split('.') // toFixed convert Number into String and set Prescision of 2 decimal points
    return (
      '$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce((acc, num, i, orig) => {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    );
}