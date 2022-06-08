let i = 0;
let timeout;
var images = [];
images[0] = "url('assets/images/equipe.jpg')";
images[1] = "url('assets/images/bg.jpg')";
images[2] = "url('media/foto5.jpg')";

// Thumbnail image controls
const currentSlide = (n) => {
  i = n;
  clearTimeout(timeout);
  showSlides(true);
};

//Create dots
const createDots = () => {
  images?.map((item, index) => {
    var newDot = document.createElement("div");
    var sliderDiv = document.getElementById("sliders-pointers");

    newDot.className = "pointer";
    newDot.onclick = () => currentSlide(index);
    sliderDiv.appendChild(newDot);
  });
};

const showSlides = (isClicked = false) => {
  let slides = document.getElementById("banner");
  let dots = document.getElementsByClassName("pointer");
  let delay = 5000;

  slides.style.backgroundImage = images[i];
  slides.style.transition = "all 1s";

  for (e = 0; e < dots?.length; e++) {
    dots[e].className = dots[e]?.className?.replace(" active", "");
  }
  dots[i].className += " active";

  if (i < images?.length - 1) {
    i++;
  } else {
    i = 0;
  }

  timeout = setTimeout(showSlides, delay);
};

createDots();
showSlides();
