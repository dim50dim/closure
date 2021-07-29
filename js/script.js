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
let closerLook = oneMoreCount(22);
console.log(closerLook());
console.log(closerLook());
console.log(closerLook());


