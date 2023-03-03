const btnCal = document.querySelector(".btn");

btnCal.addEventListener("click", function(){
    const money = document.getElementById('money');
    const interest = document.getElementById('interest')
    const time = document.getElementById('time');
   const x = Math.pow(money, 1+(interest.value/100));
   const monthlyPayment = (money.value*x*(interest.value/100))/(x-1);
    console.log(x);
    console.log(monthlyPayment)

})