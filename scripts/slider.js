var slr = document.getElementById("slider_right");
var sll = document.getElementById("slider_left");

slr.addEventListener("click", moveright);
sll.addEventListener("click", moveleft);


let slides_pos = 0;



function moveright() {

    slides_pos = slides_pos - 800;

    if (slides_pos < (-1600)) {
      slides_pos = 0;
    }
    document.getElementsByClassName("slides")[0].style.transform = `translateX(${slides_pos}px)`;

  }

  
function moveleft() {

    slides_pos = slides_pos + 800;
    document.getElementsByClassName("slides")[0].style.transform = `translateX(${slides_pos}px)`;

}

