const col1 = document.querySelectorAll('button');
const col2 = document.querySelectorAll('div');


const openTab = (event,id) => {
    console.log(id);
    col1.forEach((item)=> {
        item.classList.remove('active');
    })
    col2.forEach((item)=> {
        item.style.display = 'none';
    })
    event.target.classList.add('active');
    document.querySelector(`#${id}`).style.display = 'block';
}

col1.forEach((item) => {
    item.addEventListener('click', event => {
        openTab(event,`${item.id}-content`)
    });
})



