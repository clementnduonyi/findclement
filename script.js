let slideCount = 1;
slidesShow(slideCount);

//prev. and next control function

function addSlides(n) {
    slidesShow(slideCount += n);
}

//thumbnail image controller
function currentSlide(n){
    slidesShow(slideCount = n);
};

function slidesShow(n){
    let i;
    let slides = document.getElementsByClassName('skill-slides');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length){slideCount = 1}
    if (n < 1){slideCount = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[1].className.replace(" active", "");
    }
    slides[slideCount-1].style.display = "block";
    dots[slideCount-1].className += " active"
}

/*var slideCount = 0;
slidesShow();

function slidesShow() {
  var i;
  var slides = document.getElementsByClassName("skill-slides");
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for(i = 0; i < dots.length; i++){
    dots[1].className.replace(" active", "");

}
  slideCount++;
  if (slideCount > slides.length) {slideCount = 1}
      slides[slideCount-1].style.display = "block";
      setTimeout(slidesShow, 2000); // Change image every 2 seconds
      dots[slideCount-1].className += " active"

  //if(slideCount == slides.length){dots[slideCount - 1].className += " "}
}*/

