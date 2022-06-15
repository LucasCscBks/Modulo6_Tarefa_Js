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
let weightObj = document.querySelector('#weight');
let heightObj = document.querySelector('#height');
let selectObj = document.querySelector('#select_gender')
let buttonObj = document.querySelector('#button');
let msgObj = document.querySelector('#msg_error');

// Pegar data atual
let date = new Date();
let year = date.getUTCFullYear()
let month = date.getUTCMonth() + 1
let day = date.getUTCDate()
// XXXXXXXXXXXXXXXXXXX

buttonObj.addEventListener('click', objectUser);

function objectUser() {
    let name = nameObj.value
    try {
        if (name == '') throw 'Field “name” is invalid!' 
        if (String(name).length < 5) throw 'Field “name” is invalid!'
    } catch(err) {
        console.log(err);
        msgObj.textContent = err
    }
    user.name = name

    let total = (year * 365)  + (month * 30) + day

    let d = parseInt(dayObj.value);
    let m = parseInt(monthObj.value);
    let y = parseInt(yearObj.value);
    
    let myTotal = (y * 365) + (m * 30) + d
    
    try {
        if (d > 31 || m > 12) throw 'Field “birthDate” is invalid!';
        if (myTotal > total) throw 'Field “birthDate” is invalid!';
    } catch(err) {
        console.log(err);
        msgObj.textContent = err
    }
    user.birthDate = d + '/' + m + '/' + y
    
    let weight = parseFloat(weightObj.value)
    try {
        if (isNaN(weightObj.value)) throw 'Field “weight” is invalid!'
    } catch(err) {
        console.log(err);
        msgObj.textContent = err
    }
    user.weigth = weight
    
    let heightValue = Number(heightObj.value)
    try {
        if (isNaN(heightObj.value))  throw 'Field “height” is invalid!';
        if (Number.isInteger(heightValue) == false ) throw 'Field “height” is invalid!';
    } catch(err) {
        console.log(err)
        msgObj.textContent = err
    }
    let height = parseInt(heightObj.value)
    user.heigth = height 

    let gender = selectObj.value
    try {
        if (gender != 'male' && gender != 'female') throw 'Field “gender” is invalid!';
    } catch(err) {
        console.log(err)
        msgObj.textContent = err
    }
    
    user.gender = gender
    console.log(user)
    
}