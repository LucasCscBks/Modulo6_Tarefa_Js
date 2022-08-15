import { Avatar } from "./avatarClass.js"

export class Cowboy extends Avatar {
    constructor(name, x, y, coinBag, hp, atk,ammo) {
        super(`Cowboy ${name}`, x, y, coinBag, hp, atk)
        this.ammo = ammo
    }

    attack() {
        if (this.hp > 0) {
            if (this.ammo > 0) {
                console.log(`${this.name} Atacou`)
                this.ammo --
                return this.atk
            } else {
                console.log(`${this.name} está sem munição`)
            }
        } else {
            console.log(`${this.name} está morto e não pode atacar`)
        }
    }

    foward() {
        const ammunition = [0,0,0,1,1]
        let ammoProb = ammunition[Math.floor(Math.random() * 5)]
        if (this.hp > 0) {
            console.log(`${this.name} andou pra frente`)
            if (ammoProb === 1) {
                console.log(`achou munição`)
                this.ammo ++
            }
            return this.y ++, this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
        } else {
            console.log(`${this.name} está morto e não pode andar`)
        }
    }

    back() {
        const ammunition = [0,0,0,1,1]
        let ammoProb = ammunition[Math.floor(Math.random() * 5)]
        if (this.hp > 0) {
            if (this.y > 0) {
                console.log(`${this.name} Deu 1 passo pra trás`)
                if (ammoProb === 1) {
                    console.log(`achou munição`)
                    this.ammo ++
                }
                return this.y --, this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
            } else {
                return console.log(`${this.name} impossível ir para trás!!`)
            }
        } else {
            console.log(`${this.name} está morto e não pode andar.`)
        }
    }

    right() {
        const ammunition = [0,0,0,1,1]
        let ammoProb = ammunition[Math.floor(Math.random() * 5)]
        if (this.hp > 0) {
            console.log(`${this.name} deu 1 passo a direita`)
            if (ammoProb === 1) {
                console.log(`achou munição`)
                this.ammo ++
            }
            return this.x ++ , this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
        } else {
            console.log(`${this.name} está morto e não pode andar!!`)
        }
    }

    left() {
        const ammunition = [0,0,0,1,1]
        let ammoProb = ammunition[Math.floor(Math.random() * 5)]
        if (this.hp > 0) {
            if (this.x > 0) {
                console.log(`${this.name} deu 1 passo a esquerda`)
                if (ammoProb === 1) {
                    console.log(`achou munição`)
                    this.ammo ++
                }
                return this.x -- , this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
            } else {
                return console.log(`${this.name} Impossível andar pra esquerda!!!`)
            }
        } else {
            console.log(`${this.name} está morto e não pode se mover!!`)
        }
        
    }
}