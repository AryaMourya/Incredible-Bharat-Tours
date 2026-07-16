
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
