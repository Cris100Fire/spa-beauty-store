import "../sass/style.scss";

const btn = document.querySelector(".burger-btn");
const nav = document.querySelector(".nav");

btn.addEventListener("click", (e) => {
  e.stopPropagation();

  nav.classList.toggle("nav--open");

  const isOpen = nav.classList.contains("nav--open");
  btn.setAttribute("aria-expanded", isOpen);
});

nav.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click", () => {
  nav.classList.remove("nav--open");
});
