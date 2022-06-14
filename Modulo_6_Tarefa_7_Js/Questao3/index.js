// GLOBAL VARIABLES

let inputObj = document.querySelector('#input');
let button = document.querySelector('#button');
let fieldMessage = document.querySelector('#textArea');
let button2 = document.querySelector('#button2');
let count = 0

// GLOBAL VARIABLES
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// FUNCTIONS
function send() {
    let sendMessage = inputObj.value
    if (sendMessage === '') {
        alert('Digite algo antes de enviar!')
    } else {
        if (count == 0) {
            count += 1
            fieldMessage.textContent += sendMessage
        } else {
            fieldMessage.textContent += '\n'+ sendMessage
            fieldMessage.scrollTop += fieldMessage.clientHeight
        }
        inputObj.value = ''
    }
}
function sendEnter(e) {
    let sendMessage = inputObj.value
    if (e.keyCode === 13) {
        
        if (sendMessage === '') {
            alert('Digite algo antes de enviar!')
            e.preventDefault()
        } else {
            if (count == 0) {
                count += 1
                fieldMessage.textContent += sendMessage
                e.preventDefault()
            } else {
                fieldMessage.textContent += '\n'+ sendMessage
                e.preventDefault()
                fieldMessage.scrollTop += fieldMessage.clientHeight
            }
        }
        inputObj.value = ''
    }
   
}
function clear() {
    fieldMessage.textContent = ''
    count = 0
}
// FUNCTIONS
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// EVENTS
button.addEventListener('click', send);
inputObj.addEventListener('keydown', sendEnter);
button2.addEventListener('click', clear);