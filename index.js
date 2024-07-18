let main = document.querySelector('.main')
let btn = document.querySelector('.form button')
let inp = document.querySelector('.form input')
let qrImg = document.querySelector('.qr img')


btn.onclick = function() {
    let qr = inp.value 
    console.log(qr);
    if(!qr) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=
    200x200&data=${qr}`;
    main.classList.add('active')
}

