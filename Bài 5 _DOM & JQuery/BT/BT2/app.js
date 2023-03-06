const btnCal = document.querySelector(".btn");

btnCal.addEventListener("click", function(){
    const loan = document.getElementById('loan').value;
    const interest = document.getElementById('interest').value/100/12;
    const time = document.getElementById('time').value*12;

    const x = Math.pow(1+interest, time);
    const monthlyPayment = ((loan*x*interest)/(x-1));
    const totalToPay = monthlyPayment * time;
    const totalInterest = totalToPay - loan;
    console.log(monthlyPayment);
    console.log(totalToPay);
    console.log(totalInterest);

    const output_MonthlyPayment = document.getElementById("output1");
    const output_TotalToPay = document.getElementById("output2");
    const output_TotalInterest = document.getElementById("output3");
    output_MonthlyPayment.innerHTML = monthlyPayment.toFixed(2);
    output_TotalToPay.innerHTML = totalToPay.toFixed(2);
    output_TotalInterest.innerHTML = totalInterest.toFixed(2);
})