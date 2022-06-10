// 1- Crie uma página web que ‘arme uma bomba’ (imagem de uma bomba) que ‘exploda’ em 10 segundos, considerando:

// a) Utilize o setTimeout para ‘armar a bomba’ (bomba com pavil aceso);
// b) Caso o usuário clique na bomba, utilize o clearTimeout para desarmar a bomba (bomba com pavil apagado);
// c) Caso a bomba não seja desarmada, ao terminar o tempo, a bomba deve explodir e um som de explosão deve ser tocado.


let button1 = document.querySelector('#button1');

let result = document.querySelector('#result');
let result2 = document.querySelector('#result2');

let img = document.querySelector('#img');

let explosion = new Audio('explosion.mp3');

function bomb() {
    result.textContent = 'EXPLODIU!!!'
    result2.textContent = ' '
    result.style.color = '#ff0000'
    explosion.play();
}

button1.addEventListener('click', function() {
    let myTimeout = setTimeout(bomb, 10000);

    result.textContent = 'Bomba armada'
    result.style.color = '#0472E0'
    result2.textContent = 'Você tem 10 segundos para desarmar'
    img.src = 'bomba_ativa_rmbg.png'
    img.style.width = '300px'
    img.style.height = '300px'
    img.style.cursor = 'pointer'

    img.addEventListener('click', function() {
        clearTimeout(myTimeout);
        result.textContent = 'BOMBA DESARMADA!'
        result.style.color = '#0472E0'
        result2.textContent = ' '
        img.src = 'bomba_apagada_rmbg.png'
        img.style.width = '300px'
        img.style.height = '300px'
        img.style.cursor = 'default'
    })
})


    


