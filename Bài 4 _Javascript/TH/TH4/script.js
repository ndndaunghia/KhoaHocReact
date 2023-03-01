function calculator(){
    let amount = prompt("Nhập tiền mượn ");
    let rate = prompt("Nhập tỉ lệ ");
    let months = prompt("Nhập số tháng phải trả ");

    // Tính tiền lãi
    const interest = (amount * (rate * 0.01)) / months;
    // Tính tiền trả 1 tháng
    const total = ((amount / months) + interest).toFixed(2);

    alert("EMI: "+ total);
}

let startBtn = document.querySelector(".start");
startBtn.addEventListener("click", calculator());