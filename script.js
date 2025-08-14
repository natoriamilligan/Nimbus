document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    const headerBar = document.getElementsByTagName("header")[0];

    navToggle.addEventListener("click", () => {
        event.preventDefault();
        navLinks.classList.toggle("active");
        headerBar.classList.toggle("active");
    });
})
