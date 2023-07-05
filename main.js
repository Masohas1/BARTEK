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

////////////////////SCROLL EFEKT////////////////////

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    nav.classList.add("active");
  } else nav.classList.remove("active");
});
