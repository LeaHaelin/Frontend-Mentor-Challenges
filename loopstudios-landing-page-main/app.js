const hamburgerEl = document.querySelector(".hero__mobile--hamburger");
const menuEl = document.querySelector(".hero__mobile--menu");
const closeEl = document.querySelector(".menu--close");

// menu modal function

hamburgerEl.addEventListener("click", (e)=> {
    menuEl.classList.add("open")
    menuEl.style.transition = "all 0.3s ease"
})

closeEl.addEventListener("click", (e)=>{
    menuEl.classList.remove("open")
})


