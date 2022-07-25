const button = document.querySelector('#test');
const sortContainer = document.querySelector('#sort_container');

let section1 = document.querySelector('#cartela01');
let section2 = document.querySelector('#cartela02');
let section3 = document.querySelector('#cartela03');
let bingoC = document.querySelector('#bingo');

button.addEventListener('click', sorteador)

function bingo() {
    let arrayCartela = []
    let sortedn = Math.ceil(Math.random() * 75)
    function cartela() {
        for (let i = 0; i < 10; i++) {
            console.log('x')
            while (arrayCartela.includes(sortedn) === true) {
                sortedn = Math.ceil(Math.random() * 75)
            }
            arrayCartela.push(sortedn)
        }
        return arrayCartela.sort(function (a,b) {return a - b}) 
    }
    return cartela() 
}

function sorteador() {
    button.style.display = 'none'
    sortContainer.innerHTML = ''
    let cartela1 = bingo()
    let cartela2 = bingo()
    let cartela3 = bingo()

    // Cartelas //
    cartela01()
    cartela02()
    cartela03()

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
                            console.log('JOGADOR 1 VENCEU')
                            sortContainer.innerHTML = `<p id="sortedNumber">JOGADOR 1 VENCEU</p>`
                            clearInterval(myInterval , 5000)
                        }
                    }  
                }
                // console.log(fullCartela)
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
                            sortContainer.innerHTML = `<p id="sortedNumber">JOGADOR 2 VENCEU</p>`
                            console.log('JOGADOR 2 VENCEU')
                            clearInterval(myInterval , 5000)
                        }
                    }  
                }
            })
        }
    }
    function cartela03() {
        section3.innerHTML = ''
        section3.innerHTML = `<h1>CARTELA 3</h1>`
        let fullCartela = []
        for (let i = 0; i < 10; i++) {
            section3.innerHTML += `<p class="cartela3">${cartela3[i]}</p>`
        }
        let cartelaALL3 = document.querySelectorAll('.cartela3')
        for (let i = 0; i < 10; i++) {
            cartelaALL3[i].addEventListener('click', function() {
                console.log(cartelaALL3[i].textContent)
                if (sorteados.includes(Number(cartelaALL3[i].textContent)) === true) {
                    cartelaALL3[i].style.backgroundColor = 'Green'
                    if (fullCartela.includes(cartelaALL3[i].textContent) === false) {
                        fullCartela.push(cartelaALL3[i].textContent)
                        if (fullCartela.length == 10) {
                            sortContainer.innerHTML = `<p id="sortedNumber">JOGADOR 3 VENCEU</p>`
                            console.log('JOGADOR 3 VENCEU')
                            clearInterval(myInterval , 5000)
                        }
                    }  
                }
                // console.log(fullCartela)
            })
        }
    }
    // Cartelas //
    console.log(cartela1)
    console.log(cartela2)
    console.log(cartela3)

    let arraySorteador = []
    let sorteados = []
    // let numSorteado = 0

    function criandoArraySorteador(min,max) {
    //    num = Math.floor(Math.random() * (max - min)) + min
        for (let i = min; i <= max; i++) {
            arraySorteador.push(i);
        }
        // console.log(arraySorteador)
        return arraySorteador
    }
    criandoArraySorteador(1,75)
    console.log(arraySorteador)

    sorteadorArray()
    function sorteadorArray() {
        for (let i = 0; i < 75; i ++) {
            bingoC.innerHTML += `<p class="sorteadorArray">${arraySorteador[i]}</p>`
        }  
    }
    let AllSorteador = document.querySelectorAll('.sorteadorArray');
    console.log(AllSorteador)

    let numSorteado = arraySorteador[Math.floor(Math.random() * arraySorteador.length)]
    function sortear() {
        
        function numberSorteado() {
            numSorteado = arraySorteador[Math.floor(Math.random() * arraySorteador.length)]
            console.log(numSorteado)
            return numSorteado
        }
        // numberSorteado()
        
        while (sorteados.includes(numSorteado) === true) {
            numberSorteado()
        }
        sortContainer.innerHTML = `<p id="sortedNumber">${numSorteado}</p>`
        AllSorteador[numSorteado - 1].style.backgroundColor = 'Yellow'
        sorteados.push(numSorteado)
        
        console.log(sorteados)

        if (sorteados.length === arraySorteador.length) {
            clearInterval(myInterval , 5000)
        }
    }
    let myInterval = setInterval(sortear, 5000)
}
// console.log(sorteador())
