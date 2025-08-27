let monthlyPrices = [7.99, 12.99, 16.99, 19.99];

//Event Listeners
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const bodyTag = document.getElementsByTagName("body")[0];
const navTeamsList = document.getElementById("nav-teams-list");
const navTeamsTitle = document.getElementById("nav-teams-title");
const monthlyBtn = document.getElementsByClassName("monthly-pricing-btn")[0];
const yearlyBtn = document.getElementsByClassName("yearly-pricing-btn")[0];


navToggle.addEventListener("click", () => {
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

    for (i = 0; i < 4; i++) {
        let priceText = document.getElementsByClassName("pricing-amt")[i];
        let yearlyPrice = monthlyPrices[i] * 0.88 * 12;
        priceText.textContent = `$${yearlyPrice.toFixed(2)} / year`;
    }
})

monthlyBtn.addEventListener("click", () => {
    yearlyBtn.style.backgroundColor = "rgb(217, 217, 217)";
    monthlyBtn.style.backgroundColor = "#3fd6f0";

    changeToMonthPricing();
})

//Change pricing to monthly
let changeToMonthPricing = function() {
    for (i = 0; i < 4; i++) {
        let priceText = document.getElementsByClassName("pricing-amt")[i];
        priceText.textContent = `$${monthlyPrices[i]} / month`;
    }
}

//Load pricing page with monthly pricing
changeToMonthPricing();



