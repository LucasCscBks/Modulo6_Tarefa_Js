let productObj = document.querySelector('#product');
let productDescriptionObj = document.querySelector('#product_description');
let productValueObj = document.querySelector('#product_value');

let delLineObj = document.querySelector('#del_value')
delLineObj.style.display = 'none'        

let button1Obj = document.querySelector('#button1');
let button2Obj = document.querySelector('#button2');

let result = document.querySelector('#result');

let tbody = document.querySelector('#tbody');

let produtos = []

button1Obj.addEventListener('click', validation);

let id = 0

//   FUNÇÃO PRINCIPAL //
function validation() {
    let produto = {
        'id': '',
        'nome':'',
        'descrição': '',
        'valor': '',
        'incluídoEm': ''
    }

    let product = productObj.value
    let productDescription = productDescriptionObj.value
    let productValue = parseFloat(productValueObj.value , 10)
    

//    DEFININDO A DATA DE CADASTRO DOS PRODUTOS  //
    let date = new Date
    let timeStamp = date.getTime()
    let day = date.getDate()
    let month = (date.getMonth())+1
    let year = date.getFullYear()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
     
    let completeDate = `${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`
//    DEFININDO A DATA DE CADASTRO DOS PRODUTOS  //    

// TESTANDO SE FOI DIGITADO CORRETAMENTE OS VALORES //
    try {
        if (product == '') throw `Falha no cadastro do produto! Nome do produto vazio!`
        if (productDescription == '') throw `Falha no cadastro do produto! Descrição do produto vazia!`
        if (productValue == '') throw `Falha no cadastro do produto! Valor Nulo!`
        if (isNaN(productValue)) throw `Falha no cadastro do produto! Valor inválido!`

        //  ATRIBUINDO OS VALORES DOS OBJETOS   //
        produto["id"] = id
        produto["nome"] = product
        produto["descrição"] = productDescription
        produto["valor"] = productValue
        produto["incluídoEm"] = timeStamp
        //  ATRIBUINDO OS VALORES DOS OBJETOS   //
        id += 1
        addList();

    } catch(err){
        result.textContent = err
    }
// TESTANDO SE FOI DIGITADO CORRETAMENTE OS VALORES //    

//   FUNÇÃO DE ADICIONAR O OBJETO AO ARRAY //
    function addList() {
        produtos.push(produto)
        console.log(produtos)
        result.textContent = `Produto ${produto.nome} incluído com sucesso`
    }
//   FUNÇÃO DE ADICIONAR O OBJETO AO ARRAY //

button2Obj.addEventListener('click', showProduct);

//   FUNÇÃO DE MOSTRAR A TABELA DE PRODUTOS //
    function showProduct() {
        let i = 0
        let c = 0
        tbody.innerText = ''
        result.innerText = ''
        
        
        while (i < produtos.length) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_editar = tr.insertCell()
            let td_apagar = tr.insertCell()

            let imgEdit = document.createElement('img');
            imgEdit.src = 'edit.svg'
            
            imgEdit.addEventListener('click', function() {
                
                let edit = document.createElement('input');
                let updateButton = document.createElement('button')
                edit.placeholder = 'alterar id'
                updateButton.textContent = 'Atualizar'
                updateButton.style.width = '80px'
                updateButton.style.height = '30px'
                td_editar.appendChild(edit);
                td_editar.appendChild(updateButton);
                
                updateButton.addEventListener('click', function() {
                    
                    let UpdateValue = edit.value
                    produtos.id = UpdateValue
                    td_id.innerText = ` id ${UpdateValue}`
                    edit.style.display = 'none'
                    updateButton.style.display = 'none'
                })
            })


            let imgDelete = document.createElement('img');
            imgDelete.src = 'delete.svg'
            imgDelete.style.cursor = 'pointer'
            imgDelete.addEventListener('click', del);

            delLineObj.style.display = 'block'
            function del() {
                let delLine = delLineObj.value
                tbody.deleteRow(delLine - 1)
              }
            
            td_id.innerText = ` id ${produtos[i].id}`  
            td_produto.innerText = ` ${produtos[i].nome}`
            td_produto.style.cursor = 'pointer'
            
            let p = document.createElement('p');
            
            // VALORES MOSTRADOS QUANDO CLICAR NO NOME DO PRODUTO //
            p.textContent += `id: ${produtos[i].id}
            nome: ${produtos[i].nome}
            descrição: ${produtos[i].descrição} 
            valor: R$ ${produtos[i].valor} 
            incluídoEm: ${new Date(produtos[i].incluídoEm).getDate()}/${new Date(produtos[i].incluídoEm).getMonth() + 1}/${new Date(produtos[i].incluídoEm).getFullYear()} - ${new Date(produtos[i].incluídoEm).getHours()}:${new Date(produtos[i].incluídoEm).getMinutes()}:${new Date(produtos[i].incluídoEm).getSeconds()}`
            
            result.appendChild(p)
            p.style.display = 'none';
            // VALORES MOSTRADOS QUANDO CLICAR NO NOME DO PRODUTO //
            
            td_produto.addEventListener('click', function() {
                p.style.display = 'block'   
            })

            

            td_valor.innerText = `R$ ${produtos[i].valor}`
            td_editar.appendChild(imgEdit);
            td_apagar.appendChild(imgDelete);
            i ++
        }
        
    }
//   FUNÇÃO DE MOSTRAR A TABELA DE PRODUTOS //
}   

//   FUNÇÃO PRINCIPAL //