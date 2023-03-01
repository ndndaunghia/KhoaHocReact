let x = 1;
let y = 2;

console.log("Trước khi hoán đổi")
console.log("x = ",x , "y = ", y);

let tmp = x;
x = y;
y = tmp;

console.log("Sau khi hoán đổi")
console.log("x = ",x , "y = ", y);