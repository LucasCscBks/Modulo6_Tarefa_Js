let input = document.querySelector('#input');
let result = document.querySelector('#result');

function keyLength() {
    let cep = input.value
    let len = cep.length
    let rmvCep = cep.replace('-','')
    // console.log(cep)
    // console.log(input.value)
    // console.log(len)
    if (len > 9) {
        input.value = cep.substring(0, len -1)
    }
    else if (len > 5 && len < 7) {
        input.value = cep.substr(0,5) + '-'+ rmvCep.substr(5)
    }
}
function Length(e) {
    let char = parseInt(e.data)
    let len = String(input.value)
    let letters = input.value
    console.log(typeof(e.data))
    console.log(e.data)
    if (isNaN(char) === true && e.data != null ) {
        input.value = letters.substring(0, len.length -1)
    }
}
function Backspace(e) {
    if (e.key === 'Backspace') {
        let cep = input.value
        let len = cep.length
        if (len > 0){
          cep = cep.substr(0, len -1);
        }    
      }
}
// Functions //

input.addEventListener('keyup' ,keyLength);
input.addEventListener('input' , Length);
input.addEventListener('keydown', Backspace);