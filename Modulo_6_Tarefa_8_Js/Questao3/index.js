let user = {
    'name': '',
    'birthDate': '',
    'weight': '',
    'height': '',
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
let r2 = document.querySelector('#r2');
let r3 = document.querySelector('#r3');
let r4 = document.querySelector('#r4');
let r5 = document.querySelector('#r5');
// Pegar data atual
let date = new Date();
let year = date.getUTCFullYear()
let month = date.getUTCMonth() + 1
let day = date.getUTCDate()
// XXXXXXXXXXXXXXXXXXX

buttonObj.addEventListener('click', objectUser);

function objectUser() {
    let name = nameObj.value

    let total = (year * 365)  + (month * 30) + day

    let d = parseInt(dayObj.value);
    let m = parseInt(monthObj.value);
    let y = parseInt(yearObj.value);

    let myTotal = (y * 365) + (m * 30) + d

    let weight = parseFloat(weightObj.value)
    let heightValue = Number(heightObj.value)
    let gender = selectObj.value

    try {
        if (name == '') throw 'Field “name” is invalid!' 
        if (String(name).length < 5) throw 'Field “name” is invalid!'

        if (d > 31 || m > 12) throw 'Field “birthDate” is invalid!';
        if (myTotal > total) throw 'Field “birthDate” is invalid!';

        if (isNaN(weightObj.value)) throw 'Field “weight” is invalid!'

        if (isNaN(heightObj.value))  throw 'Field “height” is invalid!';
        if (Number.isInteger(heightValue) == false ) throw 'Field “height” is invalid!';

        if (gender != 'male' && gender != 'female') throw 'Field “gender” is invalid!';
        // RESULT XXXXXXXXXXXXXXXXXXXX
        let height = parseInt(heightObj.value)
        user.name = name
        user.birthDate = d + '/' + m + '/' + y
        user.weight = weight
        user.height = height 
        user.gender = gender
        userJson = JSON.stringify(user);

        msgObj.style.fontSize = '25px'
        msgObj.textContent = 'Name: ' + user.name
        r2.textContent = 'BirthDate: ' + user.birthDate
        r3.textContent = 'Weight: ' + user.weight + 'kg'
        r4.textContent = 'Height: ' + user.height + 'cm'
        r5.textContent = 'Gender: ' + user.gender
        console.log(userJson)
        // XXXXXXXXXXXXXXXXXXXXXXXXXXXX
    } catch(err) {
        console.log(err);
        msgObj.style.fontSize = '50px'
        msgObj.textContent = err
        r2.textContent = ''
        r3.textContent = ''
        r4.textContent = ''
        r5.textContent = ''
    }
    
}