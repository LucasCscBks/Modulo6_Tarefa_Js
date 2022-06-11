// 2- Substitua o setTimeout do exercício anterior, aumente o tempo para 60 segundos e adicione um setInterval que mostra os segundos decrementando 
// de 1 em 1 segundo até a explosão caso não seja desarmada, considerando:

// a) A cada ‘tick’ de tempo decrescente, adicione um som de ‘tick’ curto para demonstrar que o tempo está acabando;
// b) Se o usuário clicar na bomba, utilizar o clearInterval para desarmar a bomba;
// c) Se o usuário não clicar na bomba, a bomba deve explodir (som de explosão) e a contagem deve parar.

let button1 = document.querySelector('#button1');

let result = document.querySelector('#result');
let result2 = document.querySelector('#result2');

let img = document.querySelector('#img');

let explosion = new Audio('explosion.mp3');
let tick = new Audio('tik.wav')
let TimeTick = setInterval(0);



function bomb() {
    result.textContent = 'EXPLODIU!!!'
    result2.textContent = ' '
    result.style.color = '#ff0000'
    explosion.play();
    clearInterval(TimeTick);
    n = 59
}
let n = 59
function timeBomb() {  
    result.textContent = n
    n = n - 1
    tick.play();
}


button1.addEventListener('click', function() {
    
    let myTimeout = setTimeout(bomb, 60000);
    let remove = setTimeout(rmv, 60000);
    TimeTick = setInterval(timeBomb, 1000);

    function rmv() {
        img.removeEventListener('click', imgevent);
    }

    result.textContent = 'Bomba armada'
    result.style.color = '#0472E0'
    result2.textContent = 'Você tem 60 segundos para desarmar'
    img.src = 'bomba_ativa_rmbg.png'
    img.style.width = '200px'
    img.style.height = '200px'
    img.style.cursor = 'pointer'

    function imgevent() {
        clearTimeout(myTimeout);
        clearInterval(TimeTick);
        n = 59
        result.textContent = 'BOMBA DESARMADA!'
        result.style.color = '#0472E0'
        result2.textContent = ' '
        img.src = 'bomba_apagada_rmbg.png'
        img.style.width = '200px'
        img.style.height = '200px'
        img.style.cursor = 'default'
    }

    img.addEventListener('click', imgevent);

    // img.addEventListener('click', function() {
        
        // clearTimeout(myTimeout);
        // clearInterval(TimeTick);
        // n = 3
        // result.textContent = 'BOMBA DESARMADA!'
        // result.style.color = '#0472E0'
        // result2.textContent = ' '
        // img.src = 'bomba_apagada_rmbg.png'
        // img.style.width = '200px'
        // img.style.height = '200px'
        // img.style.cursor = 'default'
    // })
})


    


