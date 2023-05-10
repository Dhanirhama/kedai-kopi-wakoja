// Toggle class Active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu diklik
document.querySelector("#menu-list").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk toggle search-form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//kilk diluar elemen
const Hm = document.querySelector("#menu-list");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!Hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
