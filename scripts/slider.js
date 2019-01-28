var slr = document.getElementById("slider_right");
var sll = document.getElementById("slider_left");

slr.addEventListener("click", moveright);
sll.addEventListener("click", moveleft);

function moveright() {
    document.getElementsByClassName("slides")[0].style.transform = "translateX(-400px)";

  }

  
function moveleft() {
  document.getElementsByClassName("slides")[0].style.transform = "translateX(0px)";

}

