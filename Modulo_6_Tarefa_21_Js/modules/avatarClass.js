export class Avatar {
    constructor(name, x, y, coinBag, hp, atk) {
        this.name = name
        this.x = x
        this.y = y
        this.coinBag = coinBag
        this.hp = hp
        this.atk = atk
    }
    
    attack() {
        if (this.hp > 0) {
            console.log(`${this.name} Atacou`)
            return this.atk
        } else {
            console.log(`${this.name} está morto e não pode atacar`)
        }
        
    }

    hit(dmg) {
        if (this.hp > 0) {
            if (dmg != undefined) {
                console.log(`${this.name} ${dmg} de dano recebido`)
                this.hp = this.hp - dmg
                if (this.hp === 0) {
                    console.log(`${this.name} MORREU`)
                }
            } else {
                console.log(`${this.name} não levou dano`)
            }
        } else {
            console.log(`${this.name} já está morto`)
        }
    }

    foward() {
        if (this.hp > 0) {
            console.log(`${this.name} andou pra frente`)
            return this.y ++, this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
        } else {
            console.log(`${this.name} está morto e não pode andar`)
        }
    }

    back() {
        if (this.hp > 0) {
            if (this.y > 0) {
                console.log(`${this.name} Deu 1 passo pra trás`)
                return this.y --, this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
            } else {
                return console.log(`${this.name} impossível ir para trás!!`)
            }
        } else {
            console.log(`${this.name} está morto e não pode andar.`)
        }
    }

    right() {
        if (this.hp > 0) {
            console.log(`${this.name} deu 1 passo a direita`)
            return this.x ++ , this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
        } else {
            console.log(`${this.name} está morto e não pode andar!!`)
        }
    }

    left() {
        if (this.hp > 0) {
            if (this.x > 0) {
                console.log(`${this.name} deu 1 passo a esquerda`)
                return this.x -- , this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
            } else {
                return console.log(`${this.name} Impossível andar pra esquerda!!!`)
            }
        } else {
            console.log(`${this.name} está morto e não pode se mover!!`)
        }
        
    }

    get whereX() {
        console.log(`${this.name} Posição X : ${this.x}`)
    }

    get whereY() {
        console.log(`${this.name} Posição Y : ${this.y}`)
    }

    get bag() {
        console.log(`${this.name} Moedas obtidas : ${this.coinBag}`)
    }

}
