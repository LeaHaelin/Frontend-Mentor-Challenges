const form = document.querySelector(".validation_form");
const inputs = document.querySelectorAll(".input-box");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    inputs.forEach(input => {
        if(!input.value){
            input.parentElement.classList.add("error");
            input.style.border = "2px solid #FF7979"
        } else {
            input.parentElement.classList.remove("error");
            input.style.border = "1px solid #dedede"
        }
    })
})
