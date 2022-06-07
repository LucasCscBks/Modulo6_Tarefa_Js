let button = document.querySelector('#button');
let result = document.querySelector('#result');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');


button.addEventListener('click', function() {
    let min = parseFloat(input1.value);
    let max = parseFloat(input2.value);
    
    let nmin = Math.ceil(min);
    let nmax = Math.floor(max);

    let random = Math.floor(Math.random() * (nmax - nmin + 1) + nmin);

    if (isNaN(min) || isNaN(max)) {
        result.innerHTML = 'Não foram informados números inteiros!!'
        
    } else if (Number.isInteger(min) && Number.isInteger(max)) {
        // console.log('São números inteiros!')
        if (min < max) {
            result.innerHTML = 'O valor sorteado foi ' + random + ' !!'
        } else {
            result.innerHTML = 'ERROOO!!'
        }
    } else {
        result.innerHTML = 'Foram informados números MAS NÃO INTEIROS!!'
    }
    
         
}) 