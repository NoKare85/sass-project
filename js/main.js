// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));

        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));

        //Set Menu State
        showMenu = false;
    }
}

var menuHover = document.getElementById("menu2");

menuHover.addEventListener("click", setActive);

function setActive() {
    if (!menuHover.classList.contains("active")) {
        console.log("something");
        menuHover.classList.add("active");
        window.onmousemove = function (e) {
            var x = e.clientX,
                y = e.clientY;
            menuHover.style.top = y - 50 + "px";
            menuHover.style.left = x - 50 + "px";
        };
    } else {
        console.log("something else");
        var rect = menuHover.getBoundingClientRect;
        console.log(menuHover, rect.top);
        menuHover.style.top = "20vh";
        menuHover.style.left = "20vh";
        menuHover.classList.remove("active");
        window.onmousemove = null;
    }
}
