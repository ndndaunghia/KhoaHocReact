function average(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
        let avg = parseFloat(total / array.length);
        avg = avg.toFixed(1);
        console.log("Điểm trung bình: ", avg);
    if(avg >= 9.1 && avg <= 10)
        return "A";
    
    else if (avg >= 8.1 && avg <= 9.0)
        return "B";
    
    else if (avg >= 7.1 && avg <= 8.0)
        return "C"; 
    else 
        return "D";
}

let array = [8,9,8];
console.log(array);
console.log("Xếp loại:", average(array));