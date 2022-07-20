const table_container = document.querySelector('#table_container');

const today = new Date()
const day = `${today.getDate()}/0${today.getMonth() +1}/${today.getFullYear()}`
const tomorrow = `${today.getDate() +1}/0${today.getMonth() +1}/${today.getFullYear()}`
const tomorrow2 = `${today.getDate() +2}/0${today.getMonth() +1}/${today.getFullYear()}`
const tomorrow3 = `${today.getDate() +3}/0${today.getMonth() +1}/${today.getFullYear()}`
console.log(day)

// Função de buscar a previsão do tempo //
export function time() {
    return new Promise((resolve, reject) => {
        fetch(`https://apiprevmet3.inmet.gov.br/previsao/${select2.value}`)
        .then((resp) => {
            if (resp.status === 200){
                return resp.json()
            }
            return Promise.reject('FAILED WEATHER REQUEST'); 
        })
        .then((data) => {
            console.log(data);
            resolve(data[select2.value]);
        })
        .catch((err) => {
            reject(err);
        })
    })
    .then((data) => {
        console.log(data)
        console.log(typeof data)
        console.log(data[day]);
        console.log(data[tomorrow]);
        console.log(data[tomorrow2]);
        console.log(data['21/07/2022']);

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
        <td>${data[day]['manha']['dia_semana']}</td>
        <td><img src="${data[day]['manha']['icone']}" /></td>
        <td>${data[day]['manha']['resumo']}</td>
        <td>${data[day]['manha']['temp_min']}ºC</td>
        <td>${data[day]['manha']['temp_max']}ºC</td>`
        // Dados de hoje manhã//
        // Dados de hoje tarde//
        tbody.innerHTML += `<td>${day}</td>
        <td>Tarde</td>
        <td>${data[day]['tarde']['dia_semana']}</td>
        <td><img src="${data[day]['tarde']['icone']}" /></td>
        <td>${data[day]['tarde']['resumo']}</td>
        <td>${data[day]['tarde']['temp_min']}ºC</td>
        <td>${data[day]['tarde']['temp_max']}ºC</td>`
        // Dados de hoje tarde//
        // Dados de hoje noite//
        tbody.innerHTML += `<td>${day}</td>
        <td>Noite</td>
        <td>${data[day]['noite']['dia_semana']}</td>
        <td><img src="${data[day]['noite']['icone']}" /></td>
        <td>${data[day]['noite']['resumo']}</td>
        <td>${data[day]['noite']['temp_min']}ºC</td>
        <td>${data[day]['noite']['temp_max']}ºC</td>`
        // Dados de hoje noite//

        // Dados amanhã de manhã //
        tbody.innerHTML += `<td>${tomorrow}</td>
        <td>Manhã</td>
        <td>${data[tomorrow]['manha']['dia_semana']}</td>
        <td><img src="${data[tomorrow]['manha']['icone']}" /></td>
        <td>${data[tomorrow]['manha']['resumo']}</td>
        <td>${data[tomorrow]['manha']['temp_min']}ºC</td>
        <td>${data[tomorrow]['manha']['temp_max']}ºC</td>`
        // Dados amanhã de manhã //
        // Dados amanhã de tarde //
        tbody.innerHTML += `<td>${tomorrow}</td>
        <td>Tarde</td>
        <td>${data[tomorrow]['tarde']['dia_semana']}</td>
        <td><img src="${data[tomorrow]['tarde']['icone']}" /></td>
        <td>${data[tomorrow]['tarde']['resumo']}</td>
        <td>${data[tomorrow]['tarde']['temp_min']}ºC</td>
        <td>${data[tomorrow]['tarde']['temp_max']}ºC</td>`
        // Dados amanhã de tarde //
        // Dados amanhã a noite //
        tbody.innerHTML += `<td>${tomorrow}</td>
        <td>Noite</td>
        <td>${data[tomorrow]['noite']['dia_semana']}</td>
        <td><img src="${data[tomorrow]['noite']['icone']}" /></td>
        <td>${data[tomorrow]['noite']['resumo']}</td>
        <td>${data[tomorrow]['noite']['temp_min']}ºC</td>
        <td>${data[tomorrow]['noite']['temp_max']}ºC</td>`
        // Dados amanhã a noite //

        // Dados de depois de amanhã //
        tbody.innerHTML += `<td>${tomorrow2}</td>
        <td>Dia todo</td>
        <td>${data[tomorrow2]['dia_semana']}</td>
        <td><img src="${data[tomorrow2]['icone']}" /></td>
        <td>${data[tomorrow2]['resumo']}</td>
        <td>${data[tomorrow2]['temp_min']}ºC</td>
        <td>${data[tomorrow2]['temp_max']}ºC</td>`
        // Dados de depois de amanhã //

        // Dados de depois de depois de amanhã //
        tbody.innerHTML += `<td>${tomorrow3}</td>
        <td>Dia todo</td>
        <td>${data[tomorrow3]['dia_semana']}</td>
        <td><img src="${data[tomorrow3]['icone']}" /></td>
        <td>${data[tomorrow3]['resumo']}</td>
        <td>${data[tomorrow3]['temp_min']}ºC</td>
        <td>${data[tomorrow3]['temp_max']}ºC</td>`
        // Dados de depois de depois de amanhã //
    })
    .catch((err) => {
        console.log(err)
    })
}