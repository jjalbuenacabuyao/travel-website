const navtoggler  = document.getElementById("nav-toggler");
const nav = document.getElementById("nav");
const backBtn = document.querySelector("[data-back]");
let isVisible = nav.getAttribute("data-visible");

navtoggler.addEventListener("click", () => {
  if (isVisible === "false") {
    nav.classList.replace("-translate-x-full", "translate-x-0");
    document.body.style.overflowY = "hidden";
    nav.setAttribute("data-visible", "true");
  }
});

backBtn.addEventListener("click", () => {
  nav.classList.replace("translate-x-0", "-translate-x-full");
  document.body.style.overflowY = "auto";
  nav.setAttribute("data-visible", "false");
})
