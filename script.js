let toggle = document.querySelector(".toggle");
let minute = document.querySelector(".minute");
let hour = document.querySelector(".hour")

function animatedFunction () {
    toggle.classList.toggle('active');
}

function power () {
    minute.classList.toggle('animate');
    hour.classList.toggle('animate')
}