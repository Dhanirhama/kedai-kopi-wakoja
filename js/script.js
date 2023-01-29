// Toggle class Active
const navbarNav = document.querySelector('.navbar-nav');
// ketika menu diklik
document.querySelector('#menu-list').onclick = () => {
    navbarNav.classList.toggle('active');
};

//kilk diluar sidebar untuk menghilangkan navbar
const Hamburger = document.querySelector('#menu-list');

document.addEventListener('click', function (e) {
    if (!Hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});