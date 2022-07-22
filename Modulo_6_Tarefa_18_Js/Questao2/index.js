const bttn = document.querySelector('#bttn');
const bttn2 = document.querySelector('#bttn2');

const result = document.querySelector('#result');

let deck = []

bttn.addEventListener('click', createDeck);
bttn2.addEventListener('click', drawCard);

async function createDeck() {
    let promise = new Promise((resolve,reject) => {
        fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        .then((res) => {
            if (res.status != 200) {
                reject('[ERROR] NÃO FOI POSSÍVEL CRIAR O DECK')
            }
            // console.log(res)
            result.innerHTML = `Deck criado`
            return resolve(res.json())
        })
    })
    promise.catch((err) => {
        // console.log(err)
        result.innerHTML = err
    })
    // console.log(promise)
    console.log(await promise)
    const cardDeck = await promise
    deck.unshift(cardDeck['deck_id'],0)
    // console.log(cardDeck['deck_id']);
}
// Decks criados //
// 384kswofylvc //
// nuktz23759bf //
// mkbpkdciaukg //

async function drawCard() {
    result.innerHTML = ''
        let promise1 = new Promise((resolve,reject) => {
            fetch(`https://deckofcardsapi.com/api/deck/${deck[0]}/draw/?count=1`)
            .then((res) => {
                if (res.status != 200) {
                    reject('[ERROR] NÃO FOI POSSÍVEL PUXAR UMA CARTA')
                }
                // console.log(res)
                return res.json()
            })
            .then((data) => {
                if (data['cards'].length == 0){
                    reject('[ERROR] ACABARAM AS CARTAS')
                }
                // console.log(data)
                // console.log(data['cards'])
                // console.log(data['cards'].length)
                return resolve(data['cards'])
            })
        })
        let promise2 = new Promise((resolve,reject) => {
            fetch(`https://deckofcardsapi.com/api/deck/${deck[0]}/draw/?count=1`)
            .then((res) => {
                if (res.status != 200) {
                    reject('[ERROR] NÃO FOI POSSÍVEL PUXAR UMA CARTA')
                }
                // console.log(res)
                return res.json()
            })
            .then((data) => {
                if (data['cards'].length == 0){
                    reject('[ERROR] ACABARAM AS CARTAS')
                }
                // console.log(data)
                // console.log(data['cards'])
                // console.log(data['cards'].length)
                return resolve(data['cards'])
            })
        })
        let promise3 = new Promise((resolve,reject) => {
            fetch(`https://deckofcardsapi.com/api/deck/${deck[0]}/draw/?count=1`)
            .then((res) => {
                if (res.status != 200) {
                    reject('[ERROR] NÃO FOI POSSÍVEL PUXAR UMA CARTA')
                }
                // console.log(res)
                return res.json()
            })
            .then((data) => {
                if (data['cards'].length == 0){
                    reject('[ERROR] ACABARAM AS CARTAS')
                }
                // console.log(data)
                // console.log(data['cards'])
                // console.log(data['cards'].length)
                return resolve(data['cards'])
            })
        })
        let promise4 = new Promise((resolve,reject) => {
            fetch(`https://deckofcardsapi.com/api/deck/${deck[0]}/draw/?count=1`)
            .then((res) => {
                if (res.status != 200) {
                    reject('[ERROR] NÃO FOI POSSÍVEL PUXAR UMA CARTA')
                }
                // console.log(res)
                return res.json()
            })
            .then((data) => {
                if (data['cards'].length == 0){
                    reject('[ERROR] ACABARAM AS CARTAS')
                }
                // console.log(data)
                // console.log(data['cards'])
                // console.log(data['cards'].length)
                return resolve(data['cards'])
            })
        })
        let promise5 = new Promise((resolve,reject) => {
            fetch(`https://deckofcardsapi.com/api/deck/${deck[0]}/draw/?count=1`)
            .then((res) => {
                if (res.status != 200) {
                    reject('[ERROR] NÃO FOI POSSÍVEL PUXAR UMA CARTA')
                }
                // console.log(res)
                return res.json()
            })
            .then((data) => {
                if (data['cards'].length == 0){
                    reject('[ERROR] ACABARAM AS CARTAS')
                }
                // console.log(data)
                // console.log(data['cards'])
                // console.log(data['cards'].length)
                return resolve(data['cards'])
            })
        })
        .catch((err) => {
            result.innerHTML = err
        })
        let a = Promise.all([promise1,promise2,promise3,promise4,promise5])
        .then((values) => {
            console.log(values)
            for (let i = 0; i < 5; i++) {
                result.innerHTML += `<img src="${values[i][0]['image']}" />`
            }
        })
        
}
// console.log(deck)
