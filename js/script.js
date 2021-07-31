/////////111111111111111111

function  main(p) {
     p = 0;
    return function (z) {
      p += z;
      return p;    
    }; 
}
let next = main();
console.log(next(33));
console.log(next(33));
console.log(next(33));
console.log(next(33));
//////////////////2222222222222222

let count = (function ()  {
         let count1 = 0;
         return () => {
           return  count1+= 5;
         }
})();

console.log(count());
console.log(count());
console.log(count());
///////////////////////

function oneMoreCount(num){
      return () => {
       return num+= 25;
      }
}
let closerLook = oneMoreCount(2);
console.log(closerLook());
console.log(closerLook());
console.log(closerLook());

let second = oneMoreCount(11);
console.log(second());
console.log(second());
console.log(second());
console.log(second());
////////////////////////////////////
// for(var i = 0; i <= 5; i++){
//   (function(x) {
//     setTimeout(() => console.log(x), x * 2000)
//   })(i)
// }
// console.log(false == '0');
// console.log(false === '0');
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

console.log(1 + '2' + '2');'122'
console.log(1 + +'2' + '2');'32'
console.log(1 + -'1' + '2');'2'
console.log(+'1' + '1' + '2');'112'
console.log('a' - 'b' + '2');
console.log('a' - 'b' + 2);