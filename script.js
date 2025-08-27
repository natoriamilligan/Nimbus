//Event listensers

document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    const bodyTag = document.getElementsByTagName("body")[0];
    const navTeamsList = document.getElementById("nav-teams-list");
    const navTeamsTitle = document.getElementById("nav-teams-title");
    const monthlyBtn = document.getElementsByClassName("monthly-pricing-btn")[0];
    const yearlyBtn = document.getElementsByClassName("yearly-pricing-btn")[0];


    navToggle.addEventListener("click", () => {
        event.preventDefault();
        navLinks.classList.toggle("active");
        bodyTag.classList.toggle("no-scroll");
        navTeamsList.classList.remove("teams-active")
    });

    navTeamsTitle.addEventListener("click", () => {
        navTeamsList.classList.toggle("teams-active");
    })

    yearlyBtn.addEventListener("click", () => {
        yearlyBtn.style.backgroundColor = "#3fd6f0";
        monthlyBtn.style.backgroundColor = "rgb(217, 217, 217)";
    })

    monthlyBtn.addEventListener("click", () => {
        yearlyBtn.style.backgroundColor = "rgb(217, 217, 217)";
        monthlyBtn.style.backgroundColor = "#3fd6f0";
    })

})
