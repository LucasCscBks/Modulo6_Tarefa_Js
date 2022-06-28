// Ao invés de dividir 1/x
// Dividir 10**10/x
// Aí vc tem a precisão de 100 casas decimais
// 1/5
// 0,20
// Mas no BigInt dá 0
// Mas se vc fizer 10/5
// Dá
// 2
// Aí lembra o lance da vírgula
// 0.034920634920634915
// x é o pi
let calcObj = document.querySelector('#calc');
calcObj.addEventListener('click', nila);

// let times = 50000
// let times = 1000000000
let result = document.querySelector('#result');
let x
let y
let calc = 0
let i = 0
let a = 10n**100n
let bora = a * (3n/4n)
function nila() {
    for (let c = 1; c <= times; c++) {
        x = a/((2n + BigInt(i))*(3n + BigInt(i))*(4n + BigInt(i)))
        y = a/((4n + BigInt(i))*(5n + BigInt(i))*(6n + BigInt(i)))
        calc = BigInt(calc) + BigInt(x - y)
        // console.log(calc)
        console.log(c)
        i += 4
    }
    console.log((calc + bora)*4n)
    let calx = (calc + bora)*4n
    console.log(`3,${calx}`)
    // result.innerText = (calc + bora)*4n
}
// nila()
// console.log(calc)
// console.log((calc + bora)*4n)

let o
let p
let calc2 = 0
let q = 0
let b = 1
function vamo() {
    for (let h = 1; h <= times; h++) {
        o = 1/((2 + q)*(3 + q)*(4 + q))
        p = 1/((4 + q)*(5 + q)*(6 + q))
        calc2 += o - p
        // console.log(calc)
        q += 4
    }

}
// vamo()
// console.log(calc2)
// console.log((calc2 + 3/4)*4)