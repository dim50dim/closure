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

function second(p){
    return (z) => {
      return   p + z;   
    } 
}
let plane = second(100);
console.log(plane(20));
console.log(plane(25));