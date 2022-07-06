let testObj = document.querySelector('#test');
let buttonObj = document.querySelector('#button');
let cursor = document.querySelector('body');
let selectObj = document.querySelector('#select');
let tbody = document.querySelector('#tbody');
buttonObj.addEventListener('click' , consult);

function consult() {

    let date1 = document.querySelector('#date1');
    let date2 = document.querySelector('#date2');
    let dt1 = (date1.value).replace('-','').replace('-','')
    let dt2 = (date2.value).replace('-','').replace('-','')
    let coin = selectObj.value
    // console.log(coin)
    // console.log(dt1)
    // console.log(dt2)
    cursor.style.cursor = 'wait'
    buttonObj.style.cursor = 'wait'

    fetch(`https://economia.awesomeapi.com.br/json/daily/${coin}-BRL/?start_date=${dt1}&end_date=${dt2}`)
    .then((resp) => {
        console.log(resp)
        return resp.json()
    })
    .then((data) => {
        console.log(data)
        let nDate = new Date(data[0].timestamp*1000)
        
        console.log(nDate)
        tbody.innerHTML = `<tr id="tbodyTr"><td>${data[0].bid}</td>
        <td>${nDate.getDate()}/${nDate.getMonth() + 1}/${nDate.getFullYear()} - ${nDate.getHours()}:${nDate.getMinutes()}:${nDate.getSeconds()}</td>
        <td>min: ${data[0].low} max: ${data[0].high}</td></tr>`

        fetch(`https://economia.awesomeapi.com.br/json/daily/${coin}-BRL/?start_date=&end_date=`)
        .then((resp) => {
            return resp.json()
        })
        .then((data) => {
            let tbodyTr = document.querySelector('#tbodyTr');
            tbodyTr.innerHTML += `<td>${data[0].ask}</td>`
            cursor.style.cursor = 'default'
            buttonObj.style.cursor = 'default'
            testObj.innerText = ''
        })
        .catch((err) => {
            console.log(err)
            testObj.innerText = err
            cursor.style.cursor = 'default'
            buttonObj.style.cursor = 'default'
        })
    })
    .catch((err) => {
        console.log(err)
        testObj.innerText = err
        cursor.style.cursor = 'default'
        buttonObj.style.cursor = 'default'
    })
    
}
