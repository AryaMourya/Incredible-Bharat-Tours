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