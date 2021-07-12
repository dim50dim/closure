/////////111111111111111111

function main () {
   let p = 0;
    return function (z) {
      p += z;
      return p;    
    } 
}
let next = main();
console.log(next(2));
console.log(next(35));
console.log(next(44));