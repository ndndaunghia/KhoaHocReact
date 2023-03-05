function leapYears(year) {
  // Coding here
  if(!year)
    return;
  else{
    if(year % 4 == 0)
      return true;
    else
      return false;
  }
}

console.log(leapYears(2000));
