const button = document.querySelector('#test');
const sortContainer = document.querySelector('#sort_container');

let section1 = document.querySelector('#card01');
let section2 = document.querySelector('#card02');
let section3 = document.querySelector('#card03');
let bingoC = document.querySelector('#bingo');

button.addEventListener('click', raffle)

function bingo() {
    let arrayCard = []
    let sortedN = Math.ceil(Math.random() * 75)
    function card() {
        for (let i = 0; i < 10; i++) {
            console.log('x')
            while (arrayCard.includes(sortedN) === true) {
                sortedN = Math.ceil(Math.random() * 75)
            }
            arrayCard.push(sortedN)
        }
        return arrayCard.sort(function (a,b) {return a - b}) 
    }
    return card() 
}

function raffle() {
    button.style.display = 'none'
    sortContainer.innerHTML = ''
    let card1 = bingo()
    let card2 = bingo()
    let card3 = bingo()

    // cards //
    card01()
    card02()
    card03()

    function card01() {
        section1.innerHTML = ''
        section1.innerHTML = `<h1>card 1</h1>`
        let fullcard = []
        for (let i = 0; i < 10; i++) {
            section1.innerHTML += `<p class="card1">${card1[i]}</p>`
        }
        let cardALL1 = document.querySelectorAll('.card1')
        for (let i = 0; i < 10; i++) {
            cardALL1[i].addEventListener('click', function() {
                console.log(cardALL1[i].textContent)
                if (drawnArray.includes(Number(cardALL1[i].textContent)) === true) {
                    cardALL1[i].style.backgroundColor = 'Green'
                    if (fullcard.includes(cardALL1[i].textContent) === false) {
                        fullcard.push(cardALL1[i].textContent)
                        if (fullcard.length == 10) {
                            console.log('JOGADOR 1 VENCEU')
                            sortContainer.innerHTML = `<p id="sortedNumber">JOGADOR 1 VENCEU</p>`
                            clearInterval(myInterval , 5000)
                        }
                    }  
                }
                // console.log(fullcard)
            })
        }
    }

    function card02() {
        section2.innerText = ''
        section2.innerHTML = `<h1>card 2</h1>`
        let fullcard = []
        for (let i = 0; i < 10; i++) {
            section2.innerHTML += `<p class="card2">${card2[i]}</p>`
        }
        let cardALL2 = document.querySelectorAll('.card2')
        for (let i = 0; i < 10; i++) {
            cardALL2[i].addEventListener('click', function() {
                console.log(cardALL2[i].textContent)
                if (drawnArray.includes(Number(cardALL2[i].textContent)) === true) {
                    cardALL2[i].style.backgroundColor = 'Green'
                    if (fullcard.includes(cardALL2[i].textContent) === false) {
                        fullcard.push(cardALL2[i].textContent)
                        if (fullcard.length == 10) {
                            sortContainer.innerHTML = `<p id="sortedNumber">JOGADOR 2 VENCEU</p>`
                            console.log('JOGADOR 2 VENCEU')
                            clearInterval(myInterval , 5000)
                        }
                    }  
                }
            })
        }
    }
    function card03() {
        section3.innerHTML = ''
        section3.innerHTML = `<h1>card 3</h1>`
        let fullcard = []
        for (let i = 0; i < 10; i++) {
            section3.innerHTML += `<p class="card3">${card3[i]}</p>`
        }
        let cardALL3 = document.querySelectorAll('.card3')
        for (let i = 0; i < 10; i++) {
            cardALL3[i].addEventListener('click', function() {
                console.log(cardALL3[i].textContent)
                if (drawnArray.includes(Number(cardALL3[i].textContent)) === true) {
                    cardALL3[i].style.backgroundColor = 'Green'
                    if (fullcard.includes(cardALL3[i].textContent) === false) {
                        fullcard.push(cardALL3[i].textContent)
                        if (fullcard.length == 10) {
                            sortContainer.innerHTML = `<p id="sortedNumber">JOGADOR 3 VENCEU</p>`
                            console.log('JOGADOR 3 VENCEU')
                            clearInterval(myInterval , 5000)
                        }
                    }  
                }
                // console.log(fullcard)
            })
        }
    }
    // cards //
    console.log(card1)
    console.log(card2)
    console.log(card3)

    let arrayRaffle = []
    let drawnArray = []
    // let numDrawn = 0

    function createArrayRaffle(min,max) {
    //    num = Math.floor(Math.random() * (max - min)) + min
        for (let i = min; i <= max; i++) {
            arrayRaffle.push(i);
        }
        // console.log(arrayRaffle)
        return arrayRaffle
    }
    createArrayRaffle(1,75)
    console.log(arrayRaffle)

    raffleArray()
    function raffleArray() {
        for (let i = 0; i < 75; i ++) {
            bingoC.innerHTML += `<p class="raffleArray">${arrayRaffle[i]}</p>`
        }  
    }
    let allRaffle = document.querySelectorAll('.raffleArray');
    console.log(allRaffle)

    let numDrawn = arrayRaffle[Math.floor(Math.random() * arrayRaffle.length)]

    function drawn() {
        
        function numberDrawn() {
            numDrawn = arrayRaffle[Math.floor(Math.random() * arrayRaffle.length)]
            console.log(numDrawn)
            return numDrawn
        }
        // numberDrawn()
        
        while (drawnArray.includes(numDrawn) === true) {
            numberDrawn()
        }
        sortContainer.innerHTML = `<p id="sortedNumber">${numDrawn}</p>`
        allRaffle[numDrawn - 1].style.backgroundColor = 'Yellow'
        drawnArray.push(numDrawn)
        
        console.log(drawnArray)

        if (drawnArray.length === arrayRaffle.length) {
            clearInterval(myInterval , 5000)
        }
    }
    let myInterval = setInterval(drawn, 5000)
}
// console.log(raffle())
