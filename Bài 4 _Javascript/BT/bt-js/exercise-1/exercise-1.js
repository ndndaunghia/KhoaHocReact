function repeatString(string, num) {
  if(!string || !num){
    return;
  }
  else{
    let count = "";
    for(let i = 0; i < num; i++){
      count +=string;
    }
    return count;
  }
}

console.log(repeatString("he", 3));
//test