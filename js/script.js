/////////111111111111111111

function main (p) {
     p = 0;
    return function one () {
       return p+= 3;
    };
}
let next = main();
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());