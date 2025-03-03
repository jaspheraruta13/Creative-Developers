document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.querySelector(".profile-img");
    const titleElement = document.getElementById("changing-title");

    // Titles to cycle through
    const titles = ["Web Developer", "Graphic Designer", "System Developer", "Boyfriend for Hire"];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentTitle = titles[titleIndex];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        titleElement.innerHTML = currentTitle.substring(0, charIndex);

        if (!isDeleting && charIndex === currentTitle.length) {
            setTimeout(() => isDeleting = true, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }

        setTimeout(typeEffect, isDeleting ? 100 : 150);
    }

    typeEffect();
});


// Toggle the mobile navigation menu smoothly
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});

