function findMaxValue(x, y){
    if(x > y)
        return x;
    else 
        return y;
}

let x = 5;
let y= 20;
console.log("x =", x, " y = ", y)
console.log("Số lớn hơn: " ,findMaxValue(x,y));