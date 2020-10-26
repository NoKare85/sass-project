// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const sizeBox = document.querySelector(".size");
const sizeIcons = document.querySelectorAll(".size-icon");

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

// Setting the properties of different sizes
sizes = [
    {
        name: "small",
        max_size: 500,
        min_size: 0,
        icon: "fa-mobile",
        grid: "1fr",
    },
    {
        name: "medium",
        max_size: 769,
        min_size: 501,
        icon: "fa-tablet",
        grid: "repeat(2, 1fr)",
    },
    {
        name: "large",
        max_size: 1170,
        min_size: 770,
        icon: "fa-desktop",
        grid: "repeat(3, 1fr)",
    },
    {
        name: "xlarge",
        max_size: 10000,
        min_size: 1171,
        icon: "fa-tv",
        grid: "repeat(4, 1fr)",
    },
];

// Resize project page box

sizeBox.addEventListener("mousedown", mouseMove);
sizeBox.addEventListener("mouseup", mouseStop);

function mouseMove() {
    sizeBox.addEventListener("mousemove", reSize);
}

function mouseStop() {
    sizeBox.removeEventListener("mousemove", reSize);
}

function setSize(size) {
    let temp = sizes.find((temp) => temp.name == size);
    sizeBox.style.width = temp.size + "px";
    sizeBox.style["grid-template-columns"] = temp.grid;
    sizeIcons.forEach((item) => item.classList.remove("active"));
    document.querySelector("." + temp.icon).classList.add("active");

    boxSize = sizeBox.style.width;
    document.getElementById("width").innerHTML = "Width: " + boxSize;
    document.getElementById("width").style.right =
        parseInt(window.innerWidth) - parseInt(boxSize) + "px";
}

function reSize() {
    let val = parseInt(sizeBox.style.width);
    let temp2 = sizes.find(
        (temp2) => temp2.min_size <= val && val < temp2.max_size
    );
    setSize(temp2.name);
}
