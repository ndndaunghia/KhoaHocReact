let listProduct = document.querySelector('.list-product')
let listUser = document.querySelector('.list-user')
listProduct.addEventListener("click", function(){
    if(listUser.classList.contains('my-0')){
        listUser.classList.add('my-5');
        listUser.classList.remove('my-0');
    }
    else{
        listUser.classList.remove('my-5');
        listUser.classList.add('my-0');
    }
    }
)