let button = document.querySelector('#button');
let result = document.querySelector('#result');

button.addEventListener('click', function() {
    let input = parseFloat(document.querySelector('#input1').value)
    console.log(input)
    console.log(typeof(input))
    if (isNaN(input)) {
        result.innerHTML = 'Coloque apenas números'
    } else if(Number.isInteger(input)) {
        switch (input) {
            case 0:
                result.innerHTML = 'ZERO';
                break;
            case 1:
                result.innerHTML = 'UM';
                break;
            case 2:
                result.innerHTML = 'DOIS';
            break;   
            case 3:
                result.innerHTML = 'TRÊS';
            break;
            case 4:
                result.innerHTML = 'QUATRO';
            break;
            case 5:
                result.innerHTML = 'CINCO';
                break;
            case 6:
                result.innerHTML = 'SEIS';
                break; 
            case 7:
                result.innerHTML = 'SETE';
                break; 
            case 8:
                result.innerHTML = 'OITO';
                break; 
            case 9:
                result.innerHTML = 'NOVE';
                break;
            case 10:
                result.innerHTML = 'DEZ';
                break;
            default:
                result.innerHTML = 'Só é válido de 0 a 10'  
        }
    } else {
        result.innerHTML = 'Digite apenas número inteiro!'
    }
    
})