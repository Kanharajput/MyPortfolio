// setup nav
const navBtn = document.getElementById("nav-btn");
// for small screen menu
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const nav = document.getElementById("nav-container")
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

// add fixed id to navbar, it only added when user slides the page
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    nav.setAttribute('id','navbar-fixed')
  } else {
    nav.removeAttribute('id','navbar-fixed')
  }
});