function reverseString(string) {
  let splitString ="";
  let rvstring = "";
  if(!string)
    return;
  else{
    splitString = string.split("");
  }

  //cách 1: for ngược

  // for(let i = splitString.length - 1; i>=0; i--){
  //   rvstring += splitString[i];
  // }

  //cách 2: join
  
  splitString = splitString.reverse();
  rvstring = splitString.join("");
  return rvstring;
}

console.log(reverseString("hello there"));
