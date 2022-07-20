const select_container = document.querySelector('#select_container');

// Função de criar o Select das cidades //

export function city() {
    console.log(select.value);
    return new Promise((resolve,reject) => {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${select.value}/municipios`)
        .then((resp) => {
            if (resp.status === 200){
                console.log(resp)
                return resp.json()
            } 
            return Promise.reject('FAILED CITY REQUEST');
        })
        .then((data) => {
            console.log(data);
            resolve(data);
//              select_container.innerHTML = `<select id="select2"></select>`
//              const select2 = document.querySelector('#select2');
//              select2.innerHTML = `<option></option>`
//              for (let i = 0; i < data.length; i++) {
//                  select2.innerHTML += `<option value="${data[i].id}">${data[i].nome}</option>`
//              }
//              console.log(data.length)
        })
        .catch((err) => {
            reject(err);
        })
    })
}
export function createCity() {
    return new Promise((resolve,reject) => {
        city()
            .then((data) => {
                console.log(data);
                resolve(data);
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
                reject(err);
            })
    })
}

// Função de criar o Select das cidades //