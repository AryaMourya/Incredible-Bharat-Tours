
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
