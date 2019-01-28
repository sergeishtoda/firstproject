var slr = document.getElementById("slider_right");
var sll = document.getElementById("slider_left");

sl.addEventListener("click", moveright);

function moveright() {
    document.getElementsByClassName("slides")[0].style.transform = "translateX(-400px)";

  }

