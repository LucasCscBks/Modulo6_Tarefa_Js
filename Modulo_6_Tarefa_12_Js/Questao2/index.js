let result = document.querySelector('#result');
let show = document.querySelector('#show');
let numObj = document.querySelector('#num');

show.addEventListener('click', primos)
let array = []
let num = 0
let c = 0
function primos() {
    let number = numObj.value
    result.innerText = ''
    for (let a = 1; a <= number; a ++) {
        num = a
        c = 0
        for (let i = 1; i <= num; i++) {
            let calc = num/i
            // console.log(`${num} / ${i} = ${calc}`)
            if (num % i == 0) {
                c ++
                // console.log(c)
            }
        }
        if (c == 2) {
            // console.log(`É número primo`)
            // console.log(num)
            // array.push(num)
            result.innerText += ` [${num}]` // Uma forma de mostrar é assim mas trava/demora bastante com números grandes
        } else {
            // console.log(`Não é número primo`)
            // console.log(num)
        }
        // console.log(c)
    }
    // result.innerText = `${array}` // A outra forma de mostrar é assim, aqui trava menos
}