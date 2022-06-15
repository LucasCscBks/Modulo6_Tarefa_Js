let obj = {}
console.log(obj, typeof(obj))

obj["estilo de luta"] = 1 
console.log(obj, typeof(obj))

let obj2 = {"Estilo Musical Hoje": 1 }
Object.assign(obj, obj2);
console.log(obj, typeof(obj))

// let button = document.querySelector('button')
// button.addEventListener('click', function () {
//     console.log(obj, typeof(obj))
//     console.log(obj2, typeof(obj2))
// })