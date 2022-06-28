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

let result = document.querySelector('#result');
let x
let y
let calc = 0
let i = 0
let a = BigInt(10**10)
function nila() {
    for (let c = 1; c <= 6; c++) {
        x = a/((2n + BigInt(i))*(3n + BigInt(i))*(4n + BigInt(i)))
        y = a/((4n + BigInt(i))*(5n + BigInt(i))*(6n + BigInt(i)))
        calc = BigInt(calc) + BigInt(x - y)
        // console.log(calc)
        i += 4
    }

}
nila()
console.log(calc)
// console.log((calc + 3/4)*4)
// console.log(((calc/10**10)+3/4 )*4)
let o
let p
let calc2 = 0
let q = 0
let b = 1
function nila2() {
    for (let h = 1; h <= 6; h++) {
        p = 1/((2 + q)*(3 + q)*(4 + q))
        q = 1/((4 + q)*(5 + q)*(6 + q))
        calc2 += p - q
        // console.log(calc)
        q += 4
    }

}
nila2()
console.log(calc2)
console.log((calc2 + 3/4)*4)