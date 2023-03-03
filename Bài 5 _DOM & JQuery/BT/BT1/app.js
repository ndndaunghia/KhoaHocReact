const btnBMI = document.getElementById('calculator')

btnBMI.addEventListener("click", function(){
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");
    var resultBmi = document.getElementById('resultBmi');
    var status = ""
    const result = (weight.value / (height.value * height.value)).toFixed(2);
    if(getGender() == 'Nam'){
        if(result < 20.7){
            status += "Gầy";
        }
        else if(result >= 20.7 && result < 26.4){
            status += "Bình thường";
        }
        else if(result >= 26.4 && result < 27.8){
            status += "Thừa cân nhẹ";
        }
        else if(result >= 27.8 && result < 31.1){
            status += "Trên lý tưởng";
        }
        else if (result >= 31.1){
            status += "Béo phì";
        }
    }
    else{
        if(result < 19.1){
            status += "Gầy";
        }
        else if(result >= 19.1 && result < 25.8){
            status += "Bình thường";
        }
        else if(result >= 25.8 && result < 27.3){
            status += "Thừa cân nhẹ";
        }
        else if(result >= 27.3 && result < 32.3){
            status += "Trên lý tưởng";
        }
        else if (result >= 32.3){
            status += "Béo phì";
        }
    }
    resultBmi.innerHTML = result + " | " + status;
})

function getGender(){
    var gender = document.getElementsByName('gender');  
    for(var i =0; i <gender.length; i++){
        if(gender[i].checked)
            return gender[i].value
    }
}


