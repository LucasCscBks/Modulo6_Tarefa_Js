
// Questão 1 -- Soma
function sum(num1,num2) {
    try {
        let calc = num1 + num2
        if (Number.isInteger(num1) == false || (Number.isInteger(num2) == false)) throw `[sum] Impossible to sum ${num1} + ${num2}`
        if (num1 < 0 || num2 < 0) throw `[sum] Impossible to sum ${num1} + ${num2}`
        console.log(`Sum RESULT = ${calc}`)
        console.log(`${num1} + ${num2} = ${calc}`)
        return calc
    } catch(err) {
        console.log(err)
    }
    
}
sum(49,25)
