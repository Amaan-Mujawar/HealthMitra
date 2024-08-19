let menubar = document.querySelector('#menubar');
let mynav = document.querySelector('.navbar');


menubar.onclick = () => {
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

const signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
formContainer = document.querySelector(".form_container");

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});