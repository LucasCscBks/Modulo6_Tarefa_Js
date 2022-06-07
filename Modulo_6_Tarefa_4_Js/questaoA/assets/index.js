let input1 = document.querySelector('#input1');
let input2 = document.getElementById('input2');

let button = document.querySelector('#button');
let result = document.querySelector('#result');

button.addEventListener('click', function() {

    let peso = parseFloat(input1.value);
    let altura = parseFloat(input2.value);
    let imc = peso / (altura * altura);
    let imc_arredondado = parseFloat(imc.toFixed(2));

    // console.log(peso,typeof(peso));
    // console.log(altura,typeof(altura));
    // console.log(imc);
    // console.log(imc_arredondado);

    if (isNaN(peso) == true || isNaN(altura) == true ) {
        console.log('INSIRA APENAS NÚMEROS!!');
        result.innerHTML = 'INSIRA APENAS NÚMEROS!!'
    } else {
        if (imc < 18.5) {
            result.innerHTML = 'IMC = '+ imc_arredondado + '. ABAIXO DO PESO!'
        } else if (imc >= 18.5 && imc <= 24.9) {
            result.innerHTML = 'IMC = '+ imc_arredondado + '. Peso normal!'
        } else if (imc > 24.9 && imc <= 29.9) {
            result.innerHTML = 'IMC = '+ imc_arredondado + '. Sobrepeso!'
        } else {
            result.innerHTML = 'IMC = '+ imc_arredondado + '. OBESIDADE!!'
        }
    }
})