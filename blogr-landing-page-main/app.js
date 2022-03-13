const hamburgerEl = document.querySelector("#hamburger");
const menuModalEl = document.querySelector("#modal");

// mobile items
const mbProductEl = document.querySelector("#mb-product");
const mbCompanyEl = document.querySelector("#mb-company");
const mbConnectEl = document.querySelector("#mb-connect");
// mobile inside of item
const mbInsideProductEl = document.querySelector("#mb-inside-product");
const mbInsideCompanyEl = document.querySelector("#mb-inside-company");
const mbInsideConnectEl = document.querySelector("#mb-inside-connect");

// desktop items
const dtProductEl = document.querySelector("#dt-product");
const dtCompanyEl = document.querySelector("#dt-company");
const dtConnectEl = document.querySelector("#dt-connect");
//desktop insid of item
const dtInsideProductEl = document.querySelector("#dt-inside-product");
const dtInsideCompanyEl =document.querySelector("#dt-inside-company");
const dtInsideConnectEl =document.querySelector("#dt-inside-connect");
                                




// mobile nav modal
function navToggle() {
    hamburgerEl.addEventListener("click", ()=> {
        menuModalEl.classList.toggle("open")
        if (menuModalEl.classList.contains("open")){
            hamburgerEl.src="./images/icon-close.svg"
        } else {
            hamburgerEl.src="./images/icon-hamburger.svg"
        }
        

    })
}

navToggle();

function mbProductToggle () {
    mbProductEl.addEventListener("click", ()=> {
        mbInsideProductEl.classList.toggle("open")
        mbInsideCompanyEl.classList.remove("open")
        mbInsideConnectEl.classList.remove("open")

    })

}

mbProductToggle();

function mbCompanyToggle () {
    mbCompanyEl.addEventListener("click", ()=> {
        mbInsideCompanyEl.classList.toggle("open")
        mbInsideProductEl.classList.remove("open")
        mbInsideConnectEl.classList.remove("open")

    })

}

mbCompanyToggle();

function mbConnectToggle () {
    mbConnectEl.addEventListener("click", ()=> {
        mbInsideConnectEl.classList.toggle("open")
        mbInsideProductEl.classList.remove("open")
        mbInsideCompanyEl.classList.remove("open")

    })

}

mbConnectToggle();

// desktop ver.

function dtProductToggle() {
    dtProductEl.addEventListener("click", ()=> {
        dtInsideProductEl.classList.toggle("togglelist")
        dtInsideCompanyEl.classList.remove("togglelist")
        dtInsideConnectEl.classList.remove("togglelist")

    })
}
dtProductToggle();


function dtCompanyToggle() {
    dtCompanyEl.addEventListener("click", ()=>{
        dtInsideCompanyEl.classList.toggle("togglelist")
        dtInsideProductEl.classList.remove("togglelist")
        dtInsideConnectEl.classList.remove("togglelist")

    })
}
dtCompanyToggle();

function dtConnectToggle() {
    dtConnectEl.addEventListener("click", ()=>{
        dtInsideConnectEl.classList.toggle("togglelist")
        dtInsideCompanyEl.classList.remove("togglelist")
        dtInsideProductEl.classList.remove("togglelist")

    })
}
dtConnectToggle();
