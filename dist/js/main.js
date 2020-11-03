// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const sizeBox = document.getElementById("size-box");
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
        max_width: 500,
        min_width: 0,
        icon: "fa-mobile",
        grid: "auto",
    },
    {
        name: "medium",
        max_width: 769,
        min_width: 501,
        icon: "fa-tablet",
        grid: "repeat(2, auto)",
    },
    {
        name: "large",
        max_width: 1170,
        min_width: 770,
        icon: "fa-desktop",
        grid: "repeat(3, auto)",
    },
    {
        name: "xlarge",
        max_width: 2000,
        min_width: 1171,
        icon: "fa-tv",
        grid: "repeat(4, auto)",
    },
];

// Set project page state. If the box size is modified manually,
// changing the window size will not affect it, unless the reset button is used
sizeModified = false;
loadPage();

// Load page will set the box width to auto, if the box has not been modified manually
function loadPage() {
    sizeBox.style.width = "auto";

    document.getElementById("wadjust").value = parseInt(
        window.getComputedStyle(sizeBox).width
    );
    document.getElementById("hadjust").value = parseInt(
        window.getComputedStyle(sizeBox).height
    );

    drawBoxes();
    if (sizeModified === false) {
        sizeBox.style.width = "auto";
        let size = sizes.find(
            (size) =>
                size.min_width <=
                    document.getElementById("size-box").offsetWidth &&
                document.getElementById("size-box").offsetWidth < size.max_width
        );
        sizeBox.style["grid-template-columns"] = size.grid;
        sizeIcons.forEach((item) => item.classList.remove("active"));
        document.querySelector("." + size.icon).classList.add("active");
    } else {
    }
}

function drawBoxes() {
    let num = parseInt(document.getElementById("boxes").value);
    let overflow = document.getElementById("overflow").value;
    console.log(overflow);
    sizeBox.style.overflow = overflow;
    let arr = new Array(num).fill("box");
    sizeBox.innerHTML = "";
    arr.forEach(function (item, i) {
        var box = document.createElement("div");
        box.classList.add("item");
        box.id = item + (i + 1);
        box.innerHTML = i + 1;
        box.addEventListener("click", resizeBox);
        sizeBox.appendChild(box);
    });
    
}

function resizeBox() {
    let cols = window
        .getComputedStyle(this.parentElement)
        .gridTemplateColumns.split(" ").length;
    if (
        window.getComputedStyle(this).gridColumnStart == "auto" ||
        this.style["grid-column-end"] == "auto"
    ) {
        this.style["grid-column-start"] = 1;
        this.style["grid-column-end"] = 3;
    } else if (this.style["grid-column-end"] <= cols) {
        this.style["grid-column-end"] =
            parseInt(this.style["grid-column-end"]) + 1;
    } else {
        this.style["grid-column-start"] = "auto";
        this.style["grid-column-end"] = "auto";
    }
    console.log(this.style["grid-column-end"]);
}

window.addEventListener("resize", loadPage);

// Add event listener to mousedown event. Once mouse is clicked on the element, mousemove will be listened until button is released

sizeBox.addEventListener("mousedown", mouseMove);

// mouseMove function resizes and re-aligns the content inside the box dynamically and displays the box size

function mouseMove() {
    sizeBox.addEventListener("mousemove", reSize);
}

// When mouse button is released, the mousemove listener is removed

sizeBox.addEventListener("mouseup", mouseStop);

function mouseStop() {
    sizeBox.removeEventListener("mousemove", reSize);
}

// Resize and re-align project page box
function reSize() {
    let val = parseInt(sizeBox.style.width);
    let size = sizes.find(
        (size) => size.min_width <= val && val < size.max_width
    );
    setSize(size.name);
}

// sets the size and grid properties for the container based on a passed parameter (for example 'small', 'large', etc.)

function setSize(value) {
    let size = sizes.find((size) => size.name == value);
    sizeBox.style["grid-template-columns"] = size.grid;
    sizeBox.style.width = size.max_width + "px";
    sizeIcons.forEach((item) => item.classList.remove("active"));
    document.querySelector("." + size.icon).classList.add("active");

    document.getElementById("wadjust").value = parseInt(
        window.getComputedStyle(sizeBox).width
    );
    document.getElementById("hadjust").value = parseInt(
        window.getComputedStyle(sizeBox).width
    );

    sizeModified = true;
}

// Reset size to defaults
function resetSize() {
    sizeModified = false;
    loadPage();
}
