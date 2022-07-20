// Função de criar o Select dos estados utilizando a API //
// Usando fetch e new Promise //

const select = document.querySelector('#select');

export function selectState() {
    return new Promise((myResolve, myReject) => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then((resp) => {
            if (resp.status === 200){
                console.log(resp)
                return resp.json()
            }
            return Promise.myReject('FAILED STATE REQUEST');
        })
        .then((data) => {
            myResolve(data);
        })
        .catch((err) => {
            myReject(err)
        })
    })
    .then((res) => {
        res.sort(function(a, b) {
            let x = a.sigla
            let y = b.sigla
            if (x < y) {return -1}
            if (x > y) {return 1}
        })
        console.log(res)
        for (let i = 0; i < 27; i++) {
            select.innerHTML += `<option value="${res[i].sigla}">${res[i].nome}</option>`
        }
    }).catch((err) => {
        console.log(err)
    })
} 

