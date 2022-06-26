let products = [] // CRIANDO MEU ARRAY //
let myOrder = [] // CRIANDO UM ARRAY SÓ PRA DEIXAR ORDENADO QUANDO FOR DELETAR PELOS ID //
let i = 0
let id = 1
let myOrderId = 1
let c = 1

// CRIANDO TODOS OS OBJETOS //
let productNameObj = document.querySelector('#product');
let productDescriptionObj = document.querySelector('#description');
let productValueObj = document.querySelector('#value');
let buttonAdd = document.querySelector('#add_products');
let buttonShow = document.querySelector('#show_products');
let tbody = document.querySelector('#tbody');
let msg = document.querySelector('#message');
let sortProduct = document.querySelector('#sortName');
let sortValue = document.querySelector('#sortValue');
let searchContainerObj = document.querySelector('#search_container');
let searchProductObj = document.querySelector('#search');
let searchButtonObj = document.querySelector('#searchButton');

let container = document.querySelector('#container_count');
// CRIANDO TODOS OS OBJETOS //

// MEU EVENT LISTENER DA FUNÇÃO PRINCIPAL //
buttonAdd.addEventListener('click', mainValidation);
// MEU EVENT LISTENER DA FUNÇÃO PRINCIPAL //

// FUNÇÃO PRINCIPAL //
function mainValidation() {

    // BOTÃO QUE CHAMA A FUNÇÃO DE MOSTRAR A LISTA //
    buttonShow.addEventListener('click', showProducts);
    // BOTÃO QUE CHAMA A FUNÇÃO DE MOSTRAR A LISTA //

    // CRIANDO O OBJETO PRODUTO //
    let product = {
        "id" : '',
        "nome": '',
        "descriçao": '',
        "valor": '',
        "incluidoEm": ''
    }
    let order = {
        "id" : ''
    }
    // CRIANDO O OBJETO PRODUTO //

    // VALIDANDO OS VALORES DIGITADOS //
    try {
        if (productNameObj.value == '') throw `Falha no cadastro do produto! Campo nome vazio!!`
        if (productDescriptionObj.value == '') throw `Falha no cadastro do produto! Campo descrição vazio!!`
        if (productValueObj.value == '') throw `Falha no cadastro do produto! Campo valor vazio!!`
        if (productValueObj.value < 0 ) throw `Falha no cadastro do produto! Digite um valor positivo!!`

    // CASO VALIDADO CHAMAR FUNÇÃO DE ADICIONAR A LISTA //
    
        addList()
    } catch(err) {
        msg.innerText = err
    }
    // VALIDANDO OS VALORES DIGITADOS //
    
    // FUNÇÃO DE ADICIONAR A LISTA //
    function addList() {
        // id = products.length +1
        // CONTINUANDO A ORDENAÇÃO PELOS ID //
        myOrderId = products.length + 1
        order['id'] = myOrderId ++
        myOrder.push(order);
        // CONTINUANDO A ORDENAÇÃO PELOS ID //
        let time = new Date
        product['id'] = id ++
        product['nome'] = productNameObj.value
        product['descriçao'] = productDescriptionObj.value
        product['valor'] = productValueObj.value
        product['incluidoEm'] = time.getTime()
        products.push(product);
        msg.innerText = `Produto ${productNameObj.value} incluído com sucesso!`
        productNameObj.value = ''
        productDescriptionObj.value = ''
        productValueObj.value = ''
    }
    // FUNÇÃO DE ADICIONAR A LISTA //

    console.log(products) // CONSOLE PRA VERIFICAR SE TA ADICIONANDO DIREITINHO //

    // INICIO DA FUNÇÃO DE MOSTRAR LISTA DE PRODUTOS //
    tbody.innerHTML = ''

    container.innerHTML = '' 
    // FUNÇÃO DE MOSTRAR LISTA DE PRODUTOS //
    function showProducts() {
        searchContainerObj.style.display = 'block'
        
        tbody.innerText = ''

        container.innerText = ''
        for (i = 0; i < products.length; i++) {
            // MEU CONTAINER DE ARMAZENAR EXCLUSIVAMENTE O ID PARA A FUNÇÃO DE DELETAR //
            container.insertRow()
            let containerId = document.createElement('td');
            containerId.textContent = myOrder[i].id
            container.appendChild(containerId);
            // MEU CONTAINER DE ARMAZENAR EXCLUSIVAMENTE O ID PARA A FUNÇÃO DE DELETAR //
            tbody.insertRow()

            let tId = document.createElement('td');
            let tName = document.createElement('td');
            let tValue = document.createElement('td');
            let tEdit = document.createElement('td');
            let imgEdit = document.createElement('img');
            imgEdit.src = 'edit.svg'
            let tDelete = document.createElement('td');
            let imgDel = document.createElement('img');
            imgDel.src = 'delete.svg'

            tId.textContent = products[i].id
            tName.textContent = products[i].nome
            tValue.textContent = parseFloat(products[i].valor).toFixed(2)
            let description = products[i].descriçao
            let timeCreated = `${new Date(products[i].incluidoEm).getDate()}/${new Date(products[i].incluidoEm).getMonth() + 1}/${new Date(products[i].incluidoEm).getFullYear()} - ${new Date(products[i].incluidoEm).getHours()}:${new Date(products[i].incluidoEm).getMinutes()}:${new Date(products[i].incluidoEm).getSeconds()}`

            tbody.appendChild(tId);
            tbody.appendChild(tName);
            tbody.appendChild(tValue);
            tEdit.appendChild(imgEdit);
            tbody.appendChild(tEdit);
            tDelete.appendChild(imgDel);
            tbody.appendChild(tDelete);

            // EDITANDO MEU tName //
            tName.style.cursor = 'pointer'
            // FUNÇÃO DE MOSTRAR DETALHE DO PRODUTO //
            tName.addEventListener('click', function () {
                msg.innerText = `id: ${tId.textContent} Nome: ${tName.textContent}  Descrição: ${description} Valor: R$${parseFloat(tValue.textContent).toFixed(2)} Incluído em: ${timeCreated}`
            })
            // FUNÇÃO DE EDITAR O CONTEÚDO //
            imgEdit.style.cursor = 'pointer'
           
            imgEdit.addEventListener('click', function editEvent() {
                    msg.innerText = `Edite seu produto!`
                    buttonShow.removeEventListener('click', showProducts)
                    buttonShow.innerText = `Atualizar`

                    // FUNÇÃO DE APERTAR NO BOTAO ATUALIZAR , ATUALIZAR O PRODUTO E A LISTA //
                    buttonShow.addEventListener('click', function edit() {
                        try {
                            if (productNameObj.value == '') throw `Falha no cadastro do produto! Campo nome vazio!!`
                            if (productDescriptionObj.value == '') throw `Falha no cadastro do produto! Campo descrição vazio!!`
                            if (productValueObj.value == '') throw `Falha no cadastro do produto! Campo valor vazio!!`
                            if (productValueObj.value < 0 ) throw `Falha no cadastro do produto! Digite um valor positivo!!`
                    
                        // CASO VALIDADO ATUALIZAR A LISTA //
                            buttonShow.innerText = 'Listar produtos'
                            msg.innerText = `Atualizado com sucesso`
                            products[containerId.textContent - 1].nome = productNameObj.value
                            products[containerId.textContent - 1].descriçao = productDescriptionObj.value
                            products[containerId.textContent - 1].valor = productValueObj.value
                            
                            productNameObj.value = ''
                            productDescriptionObj.value = ''
                            productValueObj.value = ''
                            buttonShow.removeEventListener('click', edit)
                            // addList()
                            showProducts()
                            
                        } catch(err) {
                            msg.innerText = err
                        }
                        
                    })
                    // FUNÇÃO DE APERTAR NO BOTAO ATUALIZAR , ATUALIZAR O PRODUTO E A LISTA //
                    
            })
            // FUNÇÃO DE EDITAR O CONTEÚDO FIM//

            // FUNÇÃO DE DELETAR PRODUTO //
            imgDel.style.cursor = 'pointer'
            imgDel.addEventListener('click', function del() {
                // products.splice(products[products.length], 1);
                for (let n = 0; n <= products.length; n++){
                    
                    if (n == containerId.textContent ) {
                        // c ++
                        // console.log(`deletar n = ${n} e id = ${tId.textContent} e container ID = ${containerId.textContent}`)
                        products.splice(n -1,1)
                        myOrder.splice(n -1,1)
                        updateId()
                        function updateId() {
                            for (let count = 0; count < products.length; count ++) {
                                myOrder[count].id = count + 1
                            }
                            // console.log(products)
                            // console.log(myOrder)
                            showProducts()
                        }
                        
                    }

                }
                
                // showProducts()
                
            })
            // FUNÇÃO DE DELETAR PRODUTO FIM //
            }
            
            // FUNÇÃO DE ORGANIZAR A TABELA PELO NOME //
            sortProduct.addEventListener('click', function sortName() {

                products.sort(function(a, b) {
                    let x = a.nome.toLowerCase();
                    let y = b.nome.toLowerCase();
                    if (x < y) {return -1}
                    if (x > y) {return 1}
                    return 0
                });
                showProducts()
                
            })
            // FUNÇÃO DE ORGANIZAR A TABELA PELO NOME FIM //

            // FUNÇÃO DE ORGANIZAR TABELA PELO VALOR //
            sortValue.addEventListener('click', function sortProductValue() {

                products.sort(function(a, b) { return a.valor - b.valor})
                showProducts()
            });
            // FUNÇÃO DE ORGANIZAR TABELA PELO VALOR FIM //

            // FUNÇÃO DE PESQUISAR PRODUTOS //
            searchButtonObj.addEventListener('click', function searchNames() {
                let searchValue = searchProductObj.value
                tbody.innerHTML = ''
                tbody.innerText = ''
                let filterArr = products.filter(function(el) {
                    if (el.nome.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 == true) {
                        return el.nome.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
                    } else if (el.descriçao.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 == true) {
                        return el.descriçao.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
                    }
                    
                })
                if (filterArr.length > 0) {
                    if (filterArr.length == 1) {
                        msg.innerText = `Foi encontrado ${filterArr.length} produto`
                    } else if (filterArr.length > 1) {
                        msg.innerText = `Foram encontrado(s) ${filterArr.length} produto(s)`
                    }
                } else {
                    msg.innerText = `Não foram encontrados produtos conforme chave de pesquisa!`
                }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXX INICIO DA CÓPIA DA MINHA FUNÇÃO ANTERIOR SO ALTERANDO PARA O NOVO ARRAY PARA FUNCIONAR TUDO CORRETAMENTE XX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                 
                for (i = 0; i < filterArr.length; i++) {
                    
                    tbody.insertRow()
        
                    let tId = document.createElement('td');
                    let tName = document.createElement('td');
                    let tValue = document.createElement('td');
                    let tEdit = document.createElement('td');
                    let imgEdit = document.createElement('img');
                    imgEdit.src = 'edit.svg'
                    let tDelete = document.createElement('td');
                    let imgDel = document.createElement('img');
                    imgDel.src = 'delete.svg'
        
                    tId.textContent = filterArr[i].id
                    tName.textContent = filterArr[i].nome
                    tValue.textContent = parseFloat(filterArr[i].valor).toFixed(2)
                    let description = filterArr[i].descriçao
                    let timeCreated = `${new Date(filterArr[i].incluidoEm).getDate()}/${new Date(filterArr[i].incluidoEm).getMonth() + 1}/${new Date(filterArr[i].incluidoEm).getFullYear()} - ${new Date(filterArr[i].incluidoEm).getHours()}:${new Date(filterArr[i].incluidoEm).getMinutes()}:${new Date(filterArr[i].incluidoEm).getSeconds()}`
        
                    tbody.appendChild(tId);
                    tbody.appendChild(tName);
                    tbody.appendChild(tValue);
                    tEdit.appendChild(imgEdit);
                    tbody.appendChild(tEdit);
                    tDelete.appendChild(imgDel);
                    tbody.appendChild(tDelete);
                }
                // console.log(filterArr);
            })
// XXXXXXXXXXXXXXXXXXXXXXXXXXXX FIMMMMMMMMM XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
            // FIM DA FUNÇÃO DE PESQUISAR PRODUTOS //
        }
        
        // FIM DA FUNÇÃO DE MOSTRAR LISTA DE PRODUTOS //
    }
    // FUNÇÃO PRINCIPAL //
