const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    nav.classList.add("nav-fix");
  } else {
    document.body.style.paddingTop = 0;
    nav.classList.remove("nav-fix");
  }
}

window.addEventListener("scroll", fixNav);
