const clock = document.querySelector('.clock');
const slt_h = document.querySelector('.h');
const slt_min = document.querySelector('.min');
const slt_s = document.querySelector('.s');



setInterval(function () {
    let now = new Date();
    slt_h.innerText = `${now.getHours()}:`;
    slt_min.innerText = `${now.getMinutes()}:`;
    slt_s.innerText = `${now.getSeconds()}`;
}, 1000)

