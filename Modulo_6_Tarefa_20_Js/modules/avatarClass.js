export class Avatar {
    constructor(x,y,coinBag) {
        this.x = x
        this.y = y
        this.coinBag = coinBag
    }

    foward() {
        console.log(`CLASS Passo pra frente`)
        return this.y ++, this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
    }

    back() {
        if (this.y > 0) {
            console.log(`CLASS Passo pra trás`)
            return this.y --, this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
        } else {
            return console.log(`CLASS impossível ir para trás!!`)
        }
    }

    right() {
        console.log(`CLASS Passo a direita`)
        return this.x ++ , this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
    }

    left() {
        if (this.x > 0) {
            console.log(`CLASS Passo a esquerda`)
            return this.x -- , this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
        } else {
            return console.log(`CLASS Impossível continuar a esquerda!!!`)
        }
    }

    get whereX() {
        console.log(`CLASS Posição X : ${this.x}`)
    }

    get whereY() {
        console.log(`CLASS Posição Y : ${this.y}`)
    }

    get bag() {
        console.log(`CLASS Moedas obtidas : ${this.coinBag}`)
    }

}