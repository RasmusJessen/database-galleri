
document.querySelector('.show1').addEventListener("click", () => {
    document.querySelector('#gallery02').style.display = 'none';
    document.querySelector('#gallery01').style.display = 'block';
})

document.querySelector('.show2').addEventListener("click", () => {
    document.querySelector('#gallery01').style.display = 'none';
    document.querySelector('#gallery02').style.display = 'block';
})