import { e } from "./states.js";
const table_container = document.querySelector('#table_container');

const today = new Date()
const day = `${today.getDate()}/0${today.getMonth() +1}/${today.getFullYear()}`
const tomorrow = `${today.getDate() +1}/0${today.getMonth() +1}/${today.getFullYear()}`
const tomorrow2 = `${today.getDate() +2}/0${today.getMonth() +1}/${today.getFullYear()}`
const tomorrow3 = `${today.getDate() +3}/0${today.getMonth() +1}/${today.getFullYear()}`
console.log(day)

// Função de buscar a previsão do tempo //
export async function time() {
    let promise = new Promise((resolve, reject) => {
        fetch(`https://apiprevmet3.inmet.gov.br/previsao/${select2.value}`)
        .then((resp) => {
            if (resp.status === 200){
                return resp.json()
            } else {
                return reject('FAILED WEATHER REQUEST');
            }
        })
        .then((data) => {
            resolve(data[select2.value])
        })
        .catch((err) => {
            return reject('FAILED WEATHER REQUEST');
        }) 
    })
    promise.catch((err) => {
        console.log(err)
        e.innerHTML = err
    })
    const weather = await promise
        console.log(weather)
        console.log(typeof weather)
        console.log(weather[day]);
        console.log(weather[tomorrow]);
        console.log(weather[tomorrow2]);
        console.log(weather['21/07/2022']);

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
        <td>${weather[day]['manha']['dia_semana']}</td>
        <td><img src="${weather[day]['manha']['icone']}" /></td>
        <td>${weather[day]['manha']['resumo']}</td>
        <td>${weather[day]['manha']['temp_min']}ºC</td>
        <td>${weather[day]['manha']['temp_max']}ºC</td>`
        // Dados de hoje manhã//
        // Dados de hoje tarde//
        tbody.innerHTML += `<td>${day}</td>
        <td>Tarde</td>
        <td>${weather[day]['tarde']['dia_semana']}</td>
        <td><img src="${weather[day]['tarde']['icone']}" /></td>
        <td>${weather[day]['tarde']['resumo']}</td>
        <td>${weather[day]['tarde']['temp_min']}ºC</td>
        <td>${weather[day]['tarde']['temp_max']}ºC</td>`
        // Dados de hoje tarde//
        // Dados de hoje noite//
        tbody.innerHTML += `<td>${day}</td>
        <td>Noite</td>
        <td>${weather[day]['noite']['dia_semana']}</td>
        <td><img src="${weather[day]['noite']['icone']}" /></td>
        <td>${weather[day]['noite']['resumo']}</td>
        <td>${weather[day]['noite']['temp_min']}ºC</td>
        <td>${weather[day]['noite']['temp_max']}ºC</td>`
        // Dados de hoje noite//

        // Dados amanhã de manhã //
        tbody.innerHTML += `<td>${tomorrow}</td>
        <td>Manhã</td>
        <td>${weather[tomorrow]['manha']['dia_semana']}</td>
        <td><img src="${weather[tomorrow]['manha']['icone']}" /></td>
        <td>${weather[tomorrow]['manha']['resumo']}</td>
        <td>${weather[tomorrow]['manha']['temp_min']}ºC</td>
        <td>${weather[tomorrow]['manha']['temp_max']}ºC</td>`
        // Dados amanhã de manhã //
        // Dados amanhã de tarde //
        tbody.innerHTML += `<td>${tomorrow}</td>
        <td>Tarde</td>
        <td>${weather[tomorrow]['tarde']['dia_semana']}</td>
        <td><img src="${weather[tomorrow]['tarde']['icone']}" /></td>
        <td>${weather[tomorrow]['tarde']['resumo']}</td>
        <td>${weather[tomorrow]['tarde']['temp_min']}ºC</td>
        <td>${weather[tomorrow]['tarde']['temp_max']}ºC</td>`
        // Dados amanhã de tarde //
        // Dados amanhã a noite //
        tbody.innerHTML += `<td>${tomorrow}</td>
        <td>Noite</td>
        <td>${weather[tomorrow]['noite']['dia_semana']}</td>
        <td><img src="${weather[tomorrow]['noite']['icone']}" /></td>
        <td>${weather[tomorrow]['noite']['resumo']}</td>
        <td>${weather[tomorrow]['noite']['temp_min']}ºC</td>
        <td>${weather[tomorrow]['noite']['temp_max']}ºC</td>`
        // Dados amanhã a noite //

        // Dados de depois de amanhã //
        tbody.innerHTML += `<td>${tomorrow2}</td>
        <td>Dia todo</td>
        <td>${weather[tomorrow2]['dia_semana']}</td>
        <td><img src="${weather[tomorrow2]['icone']}" /></td>
        <td>${weather[tomorrow2]['resumo']}</td>
        <td>${weather[tomorrow2]['temp_min']}ºC</td>
        <td>${weather[tomorrow2]['temp_max']}ºC</td>`
        // Dados de depois de amanhã //

        // Dados de depois de depois de amanhã //
        tbody.innerHTML += `<td>${tomorrow3}</td>
        <td>Dia todo</td>
        <td>${weather[tomorrow3]['dia_semana']}</td>
        <td><img src="${weather[tomorrow3]['icone']}" /></td>
        <td>${weather[tomorrow3]['resumo']}</td>
        <td>${weather[tomorrow3]['temp_min']}ºC</td>
        <td>${weather[tomorrow3]['temp_max']}ºC</td>`
        // Dados de depois de depois de amanhã //
}