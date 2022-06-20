
// Questão 1 -- Soma
function sum(num1,num2) {
    try {
        let calc = num1 + num2
        if (Number.isInteger(num1) == false || (Number.isInteger(num2) == false)) throw `[sum] Impossible to sum ${num1} + ${num2}`
        if (num1 < 0 || num2 < 0) throw `[sum] Impossible to sum ${num1} + ${num2}`
        // console.log(`Sum RESULT = ${calc}`)
        return calc
    } catch(err) {
        console.log(err)
    }
    
}
// sum(3,2)

// Questão 2 -- Subtração
// a - b = c
// 6 - 4 = x
// x + 4 = 6
// a = c + b
let count = 0
// num3 = 6
function sub(num1,num2) {
    try {
        if (num1 < num2) throw `[sub] Impossible to subtract ${num1} - ${num2}`
        if (num1 === num2) {
            console.log(`A conta ${num1} - ${num3} = ${0}`)
        } else {
            let x = 1
            count = sum(count,1)
            let calc2 = sum(num2,x)
            if (num1 > calc2) {
                sub(num1,calc2)
            }
            if (num1 == calc2) {
                // console.log(`consegui calcular ${num1} - ${num3} = ${count}`)
                // console.log(`Subtract RESULT = ${count}`)
            }
        }
    } catch(err) {
        console.log(err)
    }
    return count
}
// sub(10,num3)
// sub(5515,4000);

// Questão 3 -- Multiplicação
let c = 0
let result = 0
function mult(num1,num2) {
    try {
        if (Number.isInteger(num1) == false || (Number.isInteger(num2) == false)) throw `[multiply] Impossible to multiply ${num1} * ${num2}`
        if (num1 < 0 || num2 < 0) throw `[multiply] Impossible to multiply ${num1} * ${num2}`
        if (num1 < num2) throw `[multiply] Impossible to multiply ${num1} * ${num2}`
        if (c < num2) {
            c = sum(c,1)
            result = sum(result, num1)
            if (c == num2) {
                // console.log(`RESULT = ${result}`)
            }
            mult(num1,num2) 
        }
        
    } catch(err) {
        console.log(err)
    }
    return result;
}
// mult(40,30)

// Questão 4 -- Exponencial
let n = 1
let exp = 0
let num3 = 6



let button = document.querySelector('#button')
let answer = document.querySelector('#result');
let obj1 = document.querySelector('#n1')
let obj2 = document.querySelector('#n2')

button.addEventListener('click', expo)

function expo(num1,num2) {
    let n1 = parseFloat(obj1.value)
    let n2 = parseFloat(obj2.value)
    num1 = n1
    num2 = n2

    exponen(num1,num2)    
function exponen(num1,num2) {

    try {
        if (Number.isInteger(num1) == false || (Number.isInteger(num2) == false)) throw `[multiply] Impossible to multiply ${num1} * ${num2}`
        if (num1 < 0 || num2 < 0) throw `[multiply] Impossible to multiply ${num1} * ${num2}`
        if (num1 < num2) throw `[multiply] Impossible to multiply ${num1} * ${num2}`
        if (num2 == 1) {
            console.log(`RESULT ${exp = n1}`)
            console.log(`${n1} elevado a ${num2} = ${exp}`)
            answer.textContent = `${n1} elevado a ${num2} = ${exp}`
            return exp
        }
        if (n == 1) {
            n = sum(n,1)
            exp = mult(num1, num1)
            if (n == num2) {
                console.log(`RESULT ${exp}`)
                console.log(`${n1} elevado a ${num2} = ${exp}`)
                answer.textContent = `${n1} elevado a ${num2} = ${exp}`
            }
        exponen(exp,num2)
        }
        if (n > 1 && n < num2) {
            n = sum(n,1)
            exp = exp * n1
            // console.log(`RESULT ${exp}`)
            if (n == num2) {
                console.log(`RESULT ${exp}`)
                console.log(`${n1} elevado a ${num2} = ${exp}`)
                answer.textContent = `${n1} elevado a ${num2} = ${exp}`
            }
            exponen(exp,num2)
        }
    } catch(err) {
        console.log(err)
    }
    return exp
    }
}
// expo(num3,4)

// Questão 5 --