let button = document.querySelector('#button');
let result = document.querySelector('#result');
let result2 = document.querySelector('#result2');
button.addEventListener('click', function() {
    let input = parseFloat(document.querySelector('#input').value, 10);
    let maxint = Math.ceil(input);
    let minint = Math.floor(input);

    console.log(input, typeof(input));
    console.log(minint,maxint);
    if (isNaN(input)) {
        result.innerHTML = 'ERROOOO!!!!'
    } else {
        result.innerHTML = 'O menor valor inteiro é '+ minint +' .'
        result2.innerHTML = 'O maior valor inteiro é '+ maxint + ' .'
    }
})