export function Character(x,y,coinBag) {
    this.x = x
    this.y = y
    this.coinBag = coinBag
}

Character.prototype.foward = function () {
    console.log(`Passo pra frente`)
    return this.y ++, this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
}

Character.prototype.back = function () {
    if (this.y > 0) {
        console.log(`Passo pra trás`)
        return this.y --, this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
    } else {
        return console.log(`impossível continuar para trás!!`)
    }
}

Character.prototype.right = function () {
    console.log(`Passo a direita`)
    return this.x ++ , this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
}

Character.prototype.left = function () {
    if (this.x > 0) {
        console.log(`Passo a esquerda`)
        return this.x -- , this.coinBag = this.coinBag + Math.floor(Math.random() * 4)
    } else {
        return console.log(`Impossível continuar a esquerda!!!`)
    }
}

Character.prototype.getWhereX = function () {
    console.log(`Posição X : ${this.x}`)
}

Character.prototype.getWhereY = function () {
    console.log(`Posição Y : ${this.y}`)
}

Character.prototype.getBag = function () {
    console.log(`Moedas obtidas : ${this.coinBag}`)
}