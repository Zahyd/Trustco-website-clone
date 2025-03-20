document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelector(".nav-links");
    const authButtons = document.querySelector(".auth-buttons");
    const menuToggle = document.createElement("button");

    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "&#9776;"; // Hamburger icon
    document.querySelector("header").appendChild(menuToggle);

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        authButtons.classList.toggle("active");
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            authButtons.classList.remove("active");
        }
    });
});
