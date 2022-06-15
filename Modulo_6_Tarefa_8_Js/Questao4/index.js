let textAreaObj = document.querySelector('#textArea');
let buttonObj = document.querySelector('#button');
let result = document.querySelector('#result');

buttonObj.addEventListener('click', function() {
    
    try {
        let text = textAreaObj.value
        let obj = JSON.parse(text)
        result.textContent = 'Parsable JSON string!'
        console.log(obj,typeof(obj))
    } catch(err) {
        console.log(err.message)
        result.textContent = err.message
    }
    
   
})