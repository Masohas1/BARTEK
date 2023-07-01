////////////////////EFEKT PARRALAXY////////////////////
const parralaxElements = [...document.querySelectorAll(".parallax")]; //Pobranie elemntów z klasą .parralax

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  parralaxElements.forEach((element) => {
    const speed = parseFloat(element.getAttribute("data-speed"));
    const yPos = -(scrollPosition - windowHeight) / speed;
    element.style.transform = `translateY(${yPos}px)`;
  });
});

////////////////////SLIDER////////////////////

const slides = [...document.querySelectorAll(".slide")];
const btns = [...document.querySelectorAll(".button")];

slidesNumber = 0;

const clickArrow = function () {
  arrowClass = [...this.classList];
  if (arrowClass.includes("btn-right")) {
    slides[slidesNumber].classList.toggle("active");
    slidesNumber++;
    if (slidesNumber >= slides.length) slidesNumber = 0;
    slides[slidesNumber].classList.toggle("active");
  } else if (arrowClass.includes("btn-left")) {
    slides[slidesNumber].classList.toggle("active");
    slidesNumber--;
    if (slidesNumber < 0) slidesNumber = slides.length - 1;
    slides[slidesNumber].classList.toggle("active");
  }
};

btns.forEach((btn) => {
  btn.addEventListener("click", clickArrow);
});
