function findMaxValue(array){
    let max = array[0];
    if(!array || !array.length)
        return "LỖi";
    else{
        for(let i = 1; i < array.length; i++){
            if(array[i] > max)
                max = array[i];
        }
        return max;
    }
}

console.log(findMaxValue([1,6,2,4, 10]));