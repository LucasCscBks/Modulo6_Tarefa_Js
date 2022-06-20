
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
num3 = 133
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
                console.log(`${num1} - ${num3} = ${count}`)
                console.log(`Subtract RESULT = ${count}`)
            }
        }
    } catch(err) {
        console.log(err)
    }
    return count
}
sub(400,num3)

