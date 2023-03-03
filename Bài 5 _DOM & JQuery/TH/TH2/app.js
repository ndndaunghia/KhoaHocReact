let control = document.querySelector("#control");

control.addEventListener("click", function (e) {
  let div = document.getElementById("scrollDemo");
  let target = e.target;
  switch (target.id) {
    case "btnScrollLeft":
      div.scrollLeft += 20;
      break;

    case "btnScrollTop":
      div.scrollTop += 20;
      break;
  }
});