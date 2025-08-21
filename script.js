document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    const bodyTag = document.getElementsByTagName("body")[0];

    navToggle.addEventListener("click", () => {
        event.preventDefault();
        navLinks.classList.toggle("active");
        bodyTag.classList.toggle("no-scroll");
    });
})
