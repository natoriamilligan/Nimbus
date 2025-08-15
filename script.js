document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");

    navToggle.addEventListener("click", () => {
        event.preventDefault();
        navLinks.classList.toggle("active");
    });
})
