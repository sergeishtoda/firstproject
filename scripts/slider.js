var sl = document.getElementById("slider_right");

sl.addEventListener("click", moveright);

function moveright() {
    document.getElementsByClassName("slides")[0].style.transform = "translateX(-400px)";

  }

