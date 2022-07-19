const button = document.querySelector('#button');
const select = document.querySelector('#select');
const select_container = document.querySelector('#select_container');
const table_container = document.querySelector('#table_container');

const today = new Date()
const day = `${today.getDate()}/0${today.getMonth() +1}/${today.getFullYear()}`
const tomorrow = `${today.getDate() +1}/0${today.getMonth() +1}/${today.getFullYear()}`
const tomorrow2 = `${today.getDate() +2}/0${today.getMonth() +1}/${today.getFullYear()}`
console.log(day)
button.addEventListener('click', time);
select.addEventListener('change', city);
// Função de criar o Select dos estados utilizando a API //
states()
function states() {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
.then((resp) => {
    if (resp.status === 200){
        console.log(resp)
        return resp.json()
    } else {
        throw `error`
    }
})
.then((data) => {
    data.sort(function(a, b) {
        let x = a.sigla
        let y = b.sigla
        if (x < y) {return -1}
        if (x > y) {return 1}
    })
    console.log(data)
    for (let i = 0; i < 27; i++) {
        select.innerHTML += `<option value="${data[i].sigla}">${data[i].nome}</option>`
    }
    
})
.catch((err) => {
    console.log(err);
})
}
// Função de criar o Select dos estados utilizando a API //

// Função de criar o Select das cidades //
function city() {
    console.log(select.value);
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${select.value}/municipios`)
    .then((resp) => {
        if (resp.status === 200){
            console.log(resp)
            return resp.json()
        } else {
            throw `error`
        }
    })
    .then((data) => {
        console.log(data)
        select_container.innerHTML = `<select id="select2"></select>`
        const select2 = document.querySelector('#select2');
        select2.innerHTML = `<option></option>`
        for (let i = 0; i < data.length; i++) {
            select2.innerHTML += `<option value="${data[i].id}">${data[i].nome}</option>`
        }
        console.log(data.length)
    })
    .catch((err) => {
        console.log(err);
    })
}
// Função de criar o Select das cidades //

// Função de buscar a previsão do tempo //
function time() {
    fetch(`https://apiprevmet3.inmet.gov.br/previsao/${select2.value}`)
    .then((resp) => {
        if (resp.status === 200){
            return resp.json()
        } else {
            throw `error`
        }
    })
    .then((data) => {
        console.log(data)
        console.log(typeof data)
        console.log(data[select2.value])
        console.log(data[select2.value]['18/07/2022']);
        console.log(data[select2.value]['19/07/2022']);
        console.log(data[select2.value]['20/07/2022']);
        console.log(data[select2.value]['21/07/2022']);

        // Criando tabela para mostrar os dados //
        table_container.innerHTML = `<table>
            <thead>
                <th>Data</th>
                <th>Período</th>
                <th>Dia da semana</th>
                <th>Ícone</th>
                <th>Resumo</th>
                <th>Temperatura mínima</th>
                <th>Temperatura máxima</th>
            </thead>
            <tbody id="tbody"></tbody>
        </table>`
        // Criando tabela para mostrar os dados //

        // Dados de hoje manhã//
        const tbody = document.querySelector('#tbody');
        tbody.innerHTML = `<td>${day}</td>
        <td>Manhã</td>
        <td>${data[select2.value][day]['manha']['dia_semana']}</td>
        <td><img src="${data[select2.value][day]['manha']['icone']}" /></td>
        <td>${data[select2.value][day]['manha']['resumo']}</td>
        <td>${data[select2.value][day]['manha']['temp_min']}ºC</td>
        <td>${data[select2.value][day]['manha']['temp_max']}ºC</td>`
        // Dados de hoje manhã//
        // Dados de hoje tarde//
        tbody.innerHTML += `<td>${day}</td>
        <td>Tarde</td>
        <td>${data[select2.value][day]['tarde']['dia_semana']}</td>
        <td><img src="${data[select2.value][day]['tarde']['icone']}" /></td>
        <td>${data[select2.value][day]['tarde']['resumo']}</td>
        <td>${data[select2.value][day]['tarde']['temp_min']}ºC</td>
        <td>${data[select2.value][day]['tarde']['temp_max']}ºC</td>`
        // Dados de hoje tarde//
        // Dados de hoje noite//
        tbody.innerHTML += `<td>${day}</td>
        <td>Noite</td>
        <td>${data[select2.value][day]['noite']['dia_semana']}</td>
        <td><img src="${data[select2.value][day]['noite']['icone']}" /></td>
        <td>${data[select2.value][day]['noite']['resumo']}</td>
        <td>${data[select2.value][day]['noite']['temp_min']}ºC</td>
        <td>${data[select2.value][day]['noite']['temp_max']}ºC</td>`
        // Dados de hoje noite//

        // Dados amanhã de manhã //
        tbody.innerHTML += `<td>${tomorrow}</td>
        <td>Manhã</td>
        <td>${data[select2.value][tomorrow]['manha']['dia_semana']}</td>
        <td><img src="${data[select2.value][tomorrow]['manha']['icone']}" /></td>
        <td>${data[select2.value][tomorrow]['manha']['resumo']}</td>
        <td>${data[select2.value][tomorrow]['manha']['temp_min']}ºC</td>
        <td>${data[select2.value][tomorrow]['manha']['temp_max']}ºC</td>`
    })
    .catch((err) => {
        console.log(err)
    })
}