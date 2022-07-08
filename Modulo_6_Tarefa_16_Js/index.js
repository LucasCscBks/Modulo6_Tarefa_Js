let input = document.querySelector('#input');
const buttonObj = document.querySelector('#search');
const cursor = document.querySelector('body');
const result = document.querySelector('#result');

// FUNÇÕES DE VERIFICAÇÃO DO INPUT //
function keyLength() {
    let cep = input.value
    let len = cep.length
    let rmvCep = cep.replace('-','')

    if (len > 9) {
        input.value = cep.substring(0, len -1)
    }
    else if (len > 5 && len < 7) {
        input.value = cep.substr(0,5) + '-'+ rmvCep.substr(5)
    }
    if (len >= 9) {
        buttonObj.style.display = 'block'
    } else {
        buttonObj.style.display = 'none'
        result.innerHTML = ''
    }
}
function Length(e) {
    let char = parseInt(e.data)
    let len = String(input.value)
    let letters = input.value
    
    if (isNaN(char) === true && e.data != null ) {
        input.value = letters.substring(0, len.length -1)
    }
}
// FUNÇÕES DE VERIFICAÇÃO DO INPUT //
function search() {
    cursor.style.cursor = 'wait'
    buttonObj.style.cursor = 'wait'
    let cep = input.value.replace('-','');
    console.log(cep)
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
    .then((resp) => {
        if (resp.status === 200){
            return resp.json()
        } else {
            cursor.style.cursor = 'default'
            buttonObj.style.cursor = 'default'
            throw result.innerHTML = `CEP INVÁLIDO`
        }
    })
    .then((data) => {
        result.innerHTML = `<ul>
        <li>Endereço: ${data.address}</li>
        <li>Bairro: ${data.district}</li>
        <li>Cidade: ${data.city}</li>
        <li>Estado: ${data.state}</li>
        <li>Latitude: ${data.lat}</li>
        <li>Longitude: ${data.lng}</li>
        </ul>
        <button id="map" type="button">Exibir Mapa</button>
        <p id="result2"></p>`

        cursor.style.cursor = 'default'
        buttonObj.style.cursor = 'default'

        const result2 = document.querySelector('#result2');
        const showMap = document.querySelector('#map');
        showMap.addEventListener('click', function ShowMap() {
            result2.innerHTML = `<iframe src="https://maps.google.com/maps?q=${data.lat}, ${data.lng}&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>`
        })
    })
    .catch((err) => {
        result.innerHTML = err
    })
    
}
// Listeners //
input.addEventListener('keyup' ,keyLength);
input.addEventListener('input' , Length);

buttonObj.addEventListener('click', search);
