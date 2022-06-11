let input = document.querySelector('#input');

// Functions //
function keyCode(e) {
    let x = e.keyCode;
    if (x >= 48 && x <= 57){} 
    else {
        e.preventDefault();
    }
}
function keyLength() {
    let cep = input.value
    let len = cep.length
    let rmvCep = cep.replace('-','')
    console.log(cep)
    console.log(input.value)
    console.log(len)
    if (len > 5 && len < 7) {
        input.value = cep.substr(0,5) + '-'+ rmvCep.substr(5)
    }
}
// Functions //
input.addEventListener('keypress' ,keyCode);
input.addEventListener('keyup' ,keyLength)
