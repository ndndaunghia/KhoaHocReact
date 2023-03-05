function removeFromArray(array, deleteItem) {
    var newArr = array.filter(value => value !== deleteItem);
    return newArr;
}

console.log(removeFromArray([1,2,3,4,3], 0));
