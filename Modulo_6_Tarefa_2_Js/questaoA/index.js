let bttn = document.querySelector('#bttn');

bttn.addEventListener("click", function() {
   
    let v1 = document.querySelector('#n1');
    let v2 = document.querySelector('#n2');
    let value1 = v1.value;
    let value2 = v2.value;

    value1 = parseInt(value1);
    value2 = parseInt(value2);
    console.log(value1,value2);
     
    console.log(typeof value1);
    
    if (value1 > value2) {
        console.log('Primeiro valor é maior!')
        document.querySelector('#p1').innerHTML = 'MAIOR';
    } else if(value1 === value2) {
        console.log('São iguais.')
        document.querySelector('#p1').innerHTML = 'IGUAL';
    } else if(value1 < value2) {
        console.log('O primeiro valor é MENOR!')
        document.querySelector('#p1').innerHTML = 'MENOR';
    };
})