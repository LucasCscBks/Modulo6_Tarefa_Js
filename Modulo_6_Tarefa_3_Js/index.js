let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let button = document.querySelector('#button');
let result = document.querySelector('#result');

let select;

button.addEventListener('click', function() {
    
    let n1 = parseFloat(input1.value);
    let n2 = parseFloat(input2.value);
    
    let soma = n1 + n2;
    let sub = n1 - n2;
    let mult = n1 * n2;
    let div = n1 / n2;

    select = document.querySelector('option[name="select"]:checked').value

    if (select == 'soma') {
        if (isNaN(soma) == true) {
            result.innerHTML = 'Digite somente numeros'
        } else {
            console.log(n1 +' + '+ n2 +' = '+ soma);
            result.innerHTML = n1 +' + '+ n2 +' = '+ soma;
        }

    } else if (select == 'sub') {
        if (isNaN(sub) == true) {
            result.innerHTML = 'Digite somente numeros'
        } else {
            console.log(n1 +' - '+ n2 +' = '+ sub);
            result.innerHTML = n1 +' - '+ n2 +' = '+ sub;
        }
            
    } else if (select == 'mult') {
        if (isNaN(mult) == true) {
            result.innerHTML = 'Digite somente numeros'
        } else {
            console.log(n1 +' * '+ n2 +' = '+ mult);
            result.innerHTML = n1 +' * '+ n2 +' = '+ mult;
        }
            
    } else {
        if (isNaN(div) == true) {
            result.innerHTML = 'Digite somente numeros'
        } else {
            console.log(n1 +' / '+ n2 +' = '+ div);
            result.innerHTML = n1 +' / '+ n2 +' = '+ div;
        }
            
    }
})
