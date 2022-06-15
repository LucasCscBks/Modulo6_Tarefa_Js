let obj = {}
obj["estilo de luta"] = 1 

let button = document.querySelector('button')
button.addEventListener('click', function () {
    console.log(obj, typeof(obj))
})