// Função de criar o Select dos estados utilizando a API //
// Usando fetch e new Promise //

const select = document.querySelector('#select');
export const e = document.querySelector('#error');

export async function selectState() {
    let promise = new Promise((myResolve, myReject) => {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then((resp) => {
            console.log(resp)
            if (resp.status === 200){
                console.log(resp)
                return myResolve(resp.json())
            } else {
                console.log(resp)
                return myReject('FAILED STATE REQUEST')
            }
        })
    })
    promise.catch((err) => {
        console.log(err)
        e.innerHTML = err
    })
    const states = await promise
    states.sort(function(a, b) {
        let x = a.sigla
        let y = b.sigla
        if (x < y) {return -1}
        if (x > y) {return 1}
    })
    console.log(states)
    for (let i = 0; i < 27; i++) {
        select.innerHTML += `<option value="${states[i].sigla}">${states[i].nome}</option>`
    }
} 
