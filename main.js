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
