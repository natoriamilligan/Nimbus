document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    const bodyTag = document.getElementsByTagName("body")[0];
    const navTeamsList = document.getElementById("nav-teams-list");
    const navTeamsTitle = document.getElementById("nav-teams-title");

    navToggle.addEventListener("click", () => {
        event.preventDefault();
        navLinks.classList.toggle("active");
        bodyTag.classList.toggle("no-scroll");
        navTeamsList.classList.remove("teams-active")
    });

    navTeamsTitle.addEventListener("click", () => {
        navTeamsList.classList.toggle("teams-active");
    })
})
