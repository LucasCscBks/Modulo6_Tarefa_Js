import {Avatar} from "./modules/avatarClass.js"

let arthur = new Avatar('Arthur',0,0,0,10,1);
let lancelot = new Avatar('Lancelot',0,0,0,10,1);

console.log(arthur)
console.log(lancelot)

arthur.hit(lancelot.attack())
arthur.hit(lancelot.attack())
arthur.hit(lancelot.attack())

arthur.foward()
arthur.foward()
arthur.foward()
arthur.foward()

lancelot.foward()
lancelot.foward()
lancelot.foward()
lancelot.right()

lancelot.whereX
lancelot.whereY
lancelot.bag

arthur.whereX
arthur.whereY
arthur.bag
