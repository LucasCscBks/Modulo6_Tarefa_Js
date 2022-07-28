import { Avatar } from "./avatarClass.js";

export class Mage extends Avatar{
    constructor(name, x, y, coinBag, hp, atk, mp) {
        super(`Mago ${name}`, x, y, coinBag, hp, atk)
        this.mp = mp
    }

    attack() {
        if (this.hp > 0) {
            if (this.mp > 0) {
                console.log(`${this.name} Atacou`)
                this.mp --
                if (this.mp === 0) {
                    setTimeout( ()=> {
                        this.mp = 10
                        console.log(`Recarregou o mp`)
                    }, 10000)
                    return this.atk
                }
                return this.atk
            } else {
                console.log(`${this.name} está sem magia`)
            }
        } else {
            console.log(`${this.name} está morto e não pode atacar`)
        }
    }

}