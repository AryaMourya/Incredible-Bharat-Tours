const toggle = document.getElementById('menu-toggle');
const navlinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});

searchInput.addEventListener("keyup",function(){
    let value = this.value.tolowerCase();

    cards.forEach(card =>{
        let text = card.innerText.tolowerCase();

        if(text.includes(value)){
            card.style.display = "block";
        } 
        else{
            card.style.display = "none";
        }
    });
});
const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {
        const text = card.innerText.toLowerCase();

        card.style.display = text.includes(value) ? "block" : "none";
    });
});

// Dark Mode 

const themeToggle = document.getElementById('theme-toggle');

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
});
