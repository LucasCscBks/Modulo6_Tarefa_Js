import {Avatar} from "./modules/avatarClass.js"
import {Cowboy} from "./modules/cowboySubclass.js"
import {Mage} from "./modules/mageSubclass.js"

let arthur = new Avatar('Arthur',0,0,0,10,1);
let lancelot = new Avatar('Lancelot',0,0,0,10,1);
let andy = new Cowboy('Andy',0,0,0,10,2,10)
let howard = new Mage('Howard',0,0,0,10,3,10)

console.log(arthur)
console.log(lancelot)
console.log(andy)
console.log(howard)

arthur.hit(andy.attack())
arthur.hit(andy.attack())
arthur.hit(andy.attack())

andy.hit(howard.attack())
andy.hit(howard.attack())

howard.hit(lancelot.attack())
howard.hit(lancelot.attack())
howard.hit(lancelot.attack())

arthur.foward()
arthur.foward()
arthur.foward()
arthur.foward()

andy.foward()
andy.foward()
andy.foward()
andy.right()
andy.right()
andy.right()
andy.right()

howard.foward()
howard.foward()
howard.foward()
howard.right()

lancelot.whereX
lancelot.whereY
lancelot.bag

arthur.whereX
arthur.whereY
arthur.bag

andy.whereX
andy.whereY
andy.bag

howard.whereX
howard.whereY
howard.bag
