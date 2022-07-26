const form = document.querySelector(".form-area");
const emailInput = document.querySelector(".input--email");
const buttonEl = document.querySelector(".button--submit");
const errorMessage = document.querySelector(".error");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 
// emailInput.addEventListener("input", ()=>{
//     if(emailInput.value.match(pattern)){
//         errorMessage.classList.remove("error-open")
//     }else{
//         errorMessage.classList.add("error-open")
//     }
// })
function submitForm(event){
    event.preventDefault();
}

buttonEl.addEventListener('click', () => {
    if(emailInput.value.match(pattern)){
        errorMessage.classList.remove("error-open")
        form.submit()
    }else{
        errorMessage.classList.add("error-open")
    }
})
