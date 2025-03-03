document.addEventListener("DOMContentLoaded", function () {
    const serviceBoxes = document.querySelectorAll(".service-box");

    serviceBoxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.boxShadow = "0 0 15px #00adb5";
        });

        box.addEventListener("mouseleave", () => {
            box.style.boxShadow = "none";
        });
    });
});

// Toggle the mobile navigation menu smoothly
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});


