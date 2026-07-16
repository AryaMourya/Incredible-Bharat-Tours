
// Load saved theme
const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = "☀️ Light Mode";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = "🌙 Dark Mode";
    }

});
const searchInput =
document.getElementById("search");

searchInput.addEventListener("keyup", () => {

const value =
searchInput.value.toLowerCase();

document
.querySelectorAll(".card")
.forEach(card => {

const text =
card.innerText.toLowerCase();

card.style.display =
text.includes(value)
? "block"
: "none";

});

});

// Select all filter buttons and cards
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

// Add click event to each button
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Get the selected region
        const selectedRegion = button.dataset.region;

        // Loop through every card
        cards.forEach(card => {

            // Show all cards
            if (selectedRegion === "all") {
                card.style.display = "block";
            }

            // Show only matching region
            else if (card.classList.contains(selectedRegion)) {
                card.style.display = "block";
            }

            // Hide others
            else {
                card.style.display = "none";
            }

        });

    });

});