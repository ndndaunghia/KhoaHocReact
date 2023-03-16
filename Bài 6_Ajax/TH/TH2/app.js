// function loadXMLDoc(){
//   req = new XMLHttpRequest();

// req.onreadystatechange = function(){
//   // console.log(req);
//   if(this.readyState == 4 && this.status == 200){
//     console.log(JSON.parse(this.response));
//   }
// }
// req.open("GET", "https://jsonplaceholder.typicode.com/users", true);
// req.send();
// }
// loadXMLDoc()

// function fetchProduct() {
//   const data = fetch("https://jsonplaceholder.typicode.com/users");
//   data.then(function (response) {
//     response.json().then(function (res) {
//       console.log(res);
//     });
//   });
// }

// fetchProduct();

const backBtn = document.querySelector("#back");
const nextBtn = document.querySelector("#next");

let limit = 5;
let page = 1;

function loadAxios(params){
  axios.get(`https://jsonplaceholder.typicode.com/users?_limit=${params.limit}&_page=${params.page}`).then((res)=>{
    console.log(res.data);
  })
}

loadAxios({
  limit : limit,
  page :page
})

backBtn.addEventListener("click", function(){
  handleBack()
})
nextBtn.addEventListener("click", function(){
  handleNext()
})

function handleBack(){
  if(page == 1) return;
  page = page -1;

  loadAxios({
    limit:limit,
    page:page
  })
}

function handleNext(){
  if(page == 2) return;
  page = page + 1;

  loadAxios({
    limit:limit,
    page:page
  })
}



// backBtn.addEventListener("click", function(){
//   axios.get("https://jsonplaceholder.typicode.com/users?_limit=5&_page=1").then((res) => {
//     console.log(res.data);
//   })
// })
// nextBtn.addEventListener("click", function(){
//   axios.get("https://jsonplaceholder.typicode.com/users?_limit=5&_page=2").then((res) => {
//     console.log(res.data);
//   })
// })

// function loadAxios(page){
//   axios.get("https://jsonplaceholder.typicode.com/users?_limit=5").then((res) => {
//     console.log(res.data);
//   })
// }

// loadAxios();