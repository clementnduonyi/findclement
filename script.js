let active = document.getElementById("active");
let line1 = document.getElementById("ln1");
let line2 = document.getElementById("ln2");
let line3 = document.getElementById("ln3");

line1.onclick = function(){
    let slides = document.getElementById("slides");
    slides.style.transform = "translateX(0)";
    active.style.top = '0px'

}
line2.onclick = function(){
    let slides = document.getElementById("slides");
    slides.style.transform = "translateX(-35%)";
    active.style.top = '80px'

}
line3.onclick = function(){
    let slides = document.getElementById("slides");
    slides.style.transform = "translateX(-70%)";
    active.style.top = '160px'

}

