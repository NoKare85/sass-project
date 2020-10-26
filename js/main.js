// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const sizeBox = document.querySelector(".size");

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

// Resize project page box

sizeBox.addEventListener("mouseup", setSize);

function setSize() {
    if (parseInt(sizeBox.style.width) > 1171) {
        console.log("It's huge!");
        sizeBox.style["grid-template-columns"] = "repeat(4, 1fr)";
    } else if (
        769 < parseInt(sizeBox.style.width) &&
        parseInt(sizeBox.style.width) < 1171
    ) {
        console.log("It's large!");
        sizeBox.style["grid-template-columns"] = "repeat(3, 1fr)";
    } else if (
        500 < parseInt(sizeBox.style.width) &&
        parseInt(sizeBox.style.width) < 769
    ) {
        console.log("It's medium!");
        sizeBox.style["grid-template-columns"] = "repeat(2, 1fr)";
    } else {
        console.log("It's small!");
        sizeBox.style["grid-template-columns"] = "repeat(1fr)";
    }

    console.log(sizeBox.style.width);
}
