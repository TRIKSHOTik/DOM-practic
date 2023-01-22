const theme = document.querySelector('#drk');
const theme_l = document.querySelector('#lgt');
const body = document.querySelector('body');
theme.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    theme.style.display = "none";
    theme_l.style.display = "block";
})
theme_l.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    theme.style.display = "block";
    theme_l.style.display = "none";
})