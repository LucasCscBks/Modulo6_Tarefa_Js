let button = document.querySelector('#button');

button.addEventListener("click", function() {
    
    let input1 = document.querySelector('#input1');
    let input2 = document.querySelector('#input2');
    let result = document.querySelector('#result');
    let s1 = String(input1.value);
    let s2 = String(input2.value);
    let l1 = s1.length
    let l2 = s2.length
    console.log(s1,s2);
    console.log(l1,l2);

    if (l1 > l2) {
        result.innerHTML = 'A palavra '+ s1 +' é maior!';
    } else if (l1 === l2) {
        result.innerHTML = 'As palavras '+ s1 +' e '+ s2 + ' são de tamanhos iguais!';
    } else if (l1 < l2) {
        result.innerHTML = 'A palavra ' + s1 +' é menor!';
    }
})