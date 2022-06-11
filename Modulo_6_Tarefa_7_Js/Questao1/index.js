let select = document.querySelector('#select');
let img = document.querySelector('#img');
let carName = document.querySelector('#section_left_title');
let year = document.querySelector('#year');
let fuel = document.querySelector('#fuel');
let brand = document.querySelector('#brand');
let fuelText = document.querySelector('#fuel_text');
let speed = document.querySelector('#speed');
let manual = document.querySelector('#manual');

select.addEventListener('change' , function() {
    let name = this.value
    console.log(name)
    switch (name) {
        case 'siena' :
            img.src = 'images/siena.jpg'
            carName.textContent = 'SIENA FIRE'
            year.textContent = '2012'
            fuel.textContent = 'Flex'
            brand.textContent = 'FIAT'
            fuelText.textContent = '48 Litros fazendo de 8,2 a 9,8 km/l no alcool e 12 a 14,1 km/l na gasolina.'
            speed.textContent = 'Aproximadamente 16,4 seg'
            manual.textContent = 'Manual de 5 marchas'
            break;
        case 'ecosport':
            img.src = 'images/ecosport.jpg'
            carName.textContent = 'ECOSPORT'
            year.textContent = '2016'
            fuel.textContent = 'Flex'
            brand.textContent = 'FORD'
            fuelText.textContent = '52 Litros fazendo de 7,2 a 8,3 km/l no alcool e 10,2 a 12,1 km/l na gasolina.'
            speed.textContent = 'Aproximadamente 15,5 seg'
            manual.textContent = 'Manual de 5 marchas'
            break;
        case 'portpofino':
            img.src = 'images/portpofino.jpg'
            carName.textContent = 'PORTPOFINO'
            year.textContent = '2018'
            fuel.textContent = 'Gasolina'
            brand.textContent = 'FERRARI'
            fuelText.textContent = '78 Litros fazendo de 5,8(cidade) a 9,7(estrada) km/l '
            speed.textContent = 'Aproximadamente 3,5 seg'
            manual.textContent = 'Automático de 7 marchas'
            break;
    }       
})