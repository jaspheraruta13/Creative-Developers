document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.querySelector(".profile-img");

    profileImage.addEventListener("mouseenter", () => {
        profileImage.style.boxShadow = "0 0 20px #00adb5";
        profileImage.style.transform = "scale(1.05)";
    });

    profileImage.addEventListener("mouseleave", () => {
        profileImage.style.boxShadow = "0 0 15px rgba(0, 173, 181, 0.5)";
        profileImage.style.transform = "scale(1)";
    });
});

// Toggle the mobile navigation menu smoothly
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});

