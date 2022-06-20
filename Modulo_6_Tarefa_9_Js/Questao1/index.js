
// Questão 1 -- Soma
let button = document.querySelector('#button')
let answer = document.querySelector('#result');
let obj1 = document.querySelector('#n1')
let obj2 = document.querySelector('#n2')

button.addEventListener('click' , sum)
    
function sum(num1,num2) {
    let n1 = parseFloat(obj1.value)
    let n2 = parseFloat(obj2.value)
    num1 = n1
    num2 = n2
    try {
        let calc = num1 + num2
        if (Number.isInteger(num1) == false || (Number.isInteger(num2) == false)) throw `[sum] Impossible to sum ${num1} + ${num2}`
        if (num1 < 0 || num2 < 0) throw `[sum] Impossible to sum ${num1} + ${num2}`
        console.log(`Sum RESULT = ${calc}`)
        console.log(`${num1} + ${num2} = ${calc}`)
        answer.textContent = `${num1} + ${num2} = ${calc}`
        return calc
    } catch(err) {
        console.log(err)
    }
    
}
// sum(49,25)
