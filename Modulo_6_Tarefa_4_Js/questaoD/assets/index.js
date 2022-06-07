let button = document.querySelector('#button');
let result = document.querySelector('#result');

button.addEventListener('click', function() {
    let random = Math.floor(Math.random() * 1000 + 1);
    
    if (random > 0 && random < 87) {
        result.innerHTML = 'Mulher IDOSA!'
    } else if (random > 86 && random < 518 ) {
        result.innerHTML = 'MULHER!'
    } else if (random > 517 && random < 598 ) {
        result.innerHTML = 'Homem IDOSO'
    } else {
        result.innerHTML = 'HOMEM!'
    }
})
