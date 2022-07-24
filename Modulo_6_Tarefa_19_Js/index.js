const button = document.querySelector('#test');
const sortContainer = document.querySelector('#sort_container');
const test2 = document.querySelector('#test2');
let section1 = document.querySelector('#cartela01');
let section2 = document.querySelector('#cartela02');

button.addEventListener('click', sorteador)
test2.addEventListener('click', global)
function global() {
    
}

function bingo() {
    let arrayCartela = []
    function cartela() {
        for (let i = 0; i < 10; i++) {
            arrayCartela.push(Math.ceil(Math.random() * 10))
        }
        return arrayCartela
    }
    return cartela() 
}

function sorteador() {
    let cartela1 = bingo()
    let cartela2 = bingo()

    // Cartelas //
    cartela01()
    cartela02()

    function cartela01() {
        section1.innerHTML = ''
        section1.innerHTML = `<h1>CARTELA 1</h1>`
        let fullCartela = []
        for (let i = 0; i < 10; i++) {
            section1.innerHTML += `<p class="cartela1">${cartela1[i]}</p>`
        }
        let cartelaALL1 = document.querySelectorAll('.cartela1')
        for (let i = 0; i < 10; i++) {
            cartelaALL1[i].addEventListener('click', function() {
                console.log(cartelaALL1[i].textContent)
                if (sorteados.includes(Number(cartelaALL1[i].textContent)) === true) {
                    cartelaALL1[i].style.backgroundColor = 'Green'
                    if (fullCartela.includes(cartelaALL1[i].textContent) === false) {
                        fullCartela.push(cartelaALL1[i].textContent)
                        if (fullCartela.length == 10) {
                            console.log('VOCE VENCEU')
                        }
                    }  
                }
                console.log(fullCartela)
            })
        }
    }

    function cartela02() {
        section2.innerText = ''
        section2.innerHTML = `<h1>CARTELA 2</h1>`
        let fullCartela = []
        for (let i = 0; i < 10; i++) {
            section2.innerHTML += `<p class="cartela2">${cartela2[i]}</p>`
        }
        let cartelaALL2 = document.querySelectorAll('.cartela2')
        for (let i = 0; i < 10; i++) {
            cartelaALL2[i].addEventListener('click', function() {
                console.log(cartelaALL2[i].textContent)
                if (sorteados.includes(Number(cartelaALL2[i].textContent)) === true) {
                    cartelaALL2[i].style.backgroundColor = 'Green'
                    if (fullCartela.includes(cartelaALL2[i].textContent) === false) {
                        fullCartela.push(cartelaALL2[i].textContent)
                        if (fullCartela.length == 10) {
                            console.log('VOCE VENCEU')
                        }
                    }  
                }
            })
        }
    }
    // Cartelas //
    console.log(cartela1)
    console.log(cartela2)

    let arraySorteador = []
    let sorteados = []
    let numSorteado = 0

    function criandoArraySorteador(min,max) {
    //    num = Math.floor(Math.random() * (max - min)) + min
        for (let i = min; i <= max; i++) {
            arraySorteador.push(i);
        }
        // console.log(arraySorteador)
        return arraySorteador
    }
    criandoArraySorteador(1,10)
    console.log(arraySorteador)

    function sortear() {
        function numberSorteado() {
            numSorteado = arraySorteador[Math.floor(Math.random() * arraySorteador.length)]
            console.log(numSorteado)
            return numSorteado
        }
        numberSorteado()
        
        while (sorteados.includes(numSorteado) === true) {
            numberSorteado()
        }
        sortContainer.innerHTML = `<p id="sortedNumber">${numSorteado}</p>`
        sorteados.push(numSorteado)
        
        console.log(sorteados)

        if (sorteados.length === arraySorteador.length) {
            clearInterval(myInterval , 3000)
        }
    }
    let myInterval = setInterval(sortear, 3000)
}
// console.log(sorteador())
