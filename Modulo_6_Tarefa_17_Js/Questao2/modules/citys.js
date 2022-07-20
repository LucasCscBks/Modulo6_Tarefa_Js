import { e } from "./states.js";
const select_container = document.querySelector('#select_container');

// Função de criar o Select das cidades //

export async function city() {
    console.log(select.value);
    let promise = new Promise((resolve,reject) => {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${select.value}/municipios`)
        .then((resp) => {
            if (resp.status === 200){
                console.log(resp)
                return resolve(resp.json())
            } else {
                console.log(resp)
                return reject('FAILED CITY REQUEST')
            }
        })
        .catch((err) => {
            return reject('FAILED CITY REQUEST')
        })
    })
    promise.catch((err) => {
        console.log(err)
        e.innerHTML = err
    })
    const citys = await promise
    select_container.innerHTML = `<select id="select2"></select>`
                const select2 = document.querySelector('#select2');
                select2.innerHTML = `<option>Cidade</option>`
                for (let i = 0; i < citys.length; i++) {
                    select2.innerHTML += `<option value="${citys[i].id}">${citys[i].nome}</option>`
                }
}

// Função de criar o Select das cidades //