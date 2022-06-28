const numObj = document.querySelector('#number');
const result = document.querySelector('#result');
const result2 = document.querySelector('#result2');
let calc = 0

function fatorial(x) {
    // let num = numObj.value
    // x = num
    if (x === '') {
        result.innerText = `Insira algum número para calcular o fatorial!`
        return
    } else if (x == 0 || x == 1) {
            calc = 1
            result.innerText = `${x}! = ${calc}`
            // console.log(calc)
            return calc
        } else {
            x = BigInt(x)
            // console.log(x)
            let i = x - 1n
            calc = x * i
            // console.log(`${x} * ${i} = ${calc}`)
            for (i = x - 2n; i != 0; i --) {
                // console.log(`${calc} * ${i} = ${calc}`)
                calc = calc * i
            }              
        }
    result.innerText = `${x}! = ${calc}`
    // console.log(calc)
    return calc
}

let c = 0
let dec
function euler(n) {
    let a = 1/fatorial(c)
        for (c = 0; c <= n; c++) {
            a = BigInt(a) + BigInt(10n**dec/BigInt(fatorial(BigInt(c))))
            console.log(a)
        }
     
    console.log(a)
    console.log(typeof a)
    let str = String(a)
    let rep = str.replace("2", ",")
    console.log(str)
    console.log(typeof str)
    console.log(`2${rep}`)
    result2.innerText = `2${rep}`
    return a
}
dec = 10n
n = 10
euler(n)
numObj.addEventListener('keyup' , fatorial);
// console.log( fatorial(5))
