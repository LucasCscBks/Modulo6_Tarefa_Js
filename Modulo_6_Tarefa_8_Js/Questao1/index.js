let user = {
    'name': '',
    'birthDate': '',
    'weigth': '',
    'heigth': '',
    'gender': ''
}
let nameObj = document.querySelector('#name');
let dayObj = document.querySelector('#day');
let monthObj = document.querySelector('#month');
let yearObj = document.querySelector('#year');
let weigthObj = document.querySelector('#weigth');
let heigthObj = document.querySelector('#heigth');
let selectObj = document.querySelector('#select_gender')
let buttonObj = document.querySelector('#button');

// Pegar data atual
let date = new Date();
let year = date.getUTCFullYear()
let month = date.getUTCMonth() + 1
let day = date.getUTCDate()
// XXXXXXXXXXXXXXXXXXX

buttonObj.addEventListener('click', objectUser);

function objectUser() {
    user.name = nameObj.value
    
    let total = (year * 365)  + (month * 30) + day

    let d = parseInt(dayObj.value);
    let m = parseInt(monthObj.value);
    let y = parseInt(yearObj.value);
    
    let myTotal = (y * 365) + (m * 30) + d
    if (d > 31 || m > 12) {
        alert('Escreva uma data válida')     
    } else {
       if (myTotal > total) {
        alert('Escreva uma data menor que a atual')
       } else {
        user.birthDate = d + '/' + m + '/' + y
       }
    }

    let weigth = parseFloat(weigthObj.value)
    user.weigth = weigth 
    let heigth = parseInt(heigthObj.value)
    user.heigth = heigth 

    let gender = selectObj.value
    user.gender = gender
    console.log(user)
    
}