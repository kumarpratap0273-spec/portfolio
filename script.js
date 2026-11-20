/* LIVE DIGITAL CLOCK */

function updateClock() {
    const now = new Date();

    const timeElement = document.getElementById("liveTime");
    const dateElement = document.getElementById("liveDate");

    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString("en-IN");
    }

    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    }
}

updateClock();
setInterval(updateClock, 1000);

/* DARK AND LIGHT THEME */

const themeToggle = document.getElementById("themeToggle");

// Remember saved theme
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}

if (themeToggle) {
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-theme");

        const isLight = document.body.classList.contains("light-theme");

        localStorage.setItem(
            "portfolioTheme",
            isLight ? "light" : "dark"
        );

    });
}


// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });
}


// CLOSE MENU WHEN CLICKING OUTSIDE
document.addEventListener("click", function (event) {
    if (
        sidebar &&
        sidebar.classList.contains("open") &&
        !sidebar.contains(event.target) &&
        event.target !== menuToggle
    ) {
        sidebar.classList.remove("open");
    }
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK
document.querySelectorAll(".navigation a").forEach(function (link) {
    link.addEventListener("click", function () {
        if (sidebar) {
            sidebar.classList.remove("open");
        }
    });
});