let ulProdutos       = document.querySelector(".ulProdutos")
let ulCarrinho       = document.querySelector(".ulCarrinho")
ulCarrinho.innerHTML = `<p id="carrinhoVazio">Carrinho Vazio</p><p id="AdicioneItens">Adicione Itens</p>`
document.querySelector(".totalPreco").innerText = "R$ 0,00"
document.querySelector(".quantidade").innerText = "0"

function listarProdutos(listaProdutos, secao){
    secao.innerHTML = ""
    for(let i = 0; i<listaProdutos.length; i++){
        let produto             = listaProdutos[i]
        let cardProduto         = criarCardProduto(produto)
        let cardProdutoCarrinho = criarCardProdutoCarrinho(produto)

        if(secao != ulCarrinho){
            secao.appendChild(cardProduto)
        }else{
            secao.appendChild(cardProdutoCarrinho)
        }
    }
}
listarProdutos(data, ulProdutos)

function criarCardProduto(produto){

    let id              = produto.id
    let img             = produto.img
    let nome            = produto.nameItem
    let descricao       = produto.description
    let valor           = produto.value
    let botao           = produto.addCart
    let tag             = produto.tag
  
    let tagLi           = document.createElement("li")
    let tagDivImg       = document.createElement("div")
    let tagImg          = document.createElement("img")
    let tagDivContent   = document.createElement("div")
    let tagSpanTag      = document.createElement("span")
    let tagH2Nome       = document.createElement("h2")
    let tagPDescricao   = document.createElement("p")
    let tagSpanPreco    = document.createElement("span")
    let tagBtnComprar   = document.createElement("button")

    tagDivImg.classList.add("image_product")
    tagImg.src = `${img}`
    tagImg.alt = `${nome}`
    tagDivImg.appendChild(tagImg)

    tagDivContent.classList.add("content_product")
    tagSpanTag.classList.add("tag")
    tagSpanTag.innerText = `${tag[0]}`
    tagH2Nome.innerText = `${nome}`
    tagPDescricao.innerText = `${descricao}`
    tagSpanPreco.classList.add("preco")
    tagSpanPreco.innerText = `R$ ${valor},00`
    tagBtnComprar.id =  `${id}`
    tagBtnComprar.type = "button"
    tagBtnComprar.innerText = `${botao}`
  
    tagDivImg.appendChild(tagImg)
    tagDivContent.append(tagSpanTag, tagH2Nome, tagPDescricao, tagSpanPreco, tagBtnComprar)
    
    tagLi.append(tagDivImg, tagDivContent)

    return tagLi
}

function criarCardProdutoCarrinho(produto){

    let img             = produto.img
    let nome            = produto.nameItem
    let valor           = produto.value
  
    let tagLi           = document.createElement("li")
    let tagDivImg       = document.createElement("div")
    let tagImg          = document.createElement("img")
    let tagDivContent   = document.createElement("div")
    let tagH2Nome       = document.createElement("h2")
    let tagSpanPreco    = document.createElement("span")
    let tagBtnComprar   = document.createElement("button")

    tagDivImg.classList.add("image_product")
    tagImg.src = `${img}`
    tagImg.alt = `${nome}`
    tagDivImg.appendChild(tagImg)

    tagDivContent.classList.add("content_product")
    tagH2Nome.innerText = `${nome}`
    tagSpanPreco.classList.add("preco")
    tagSpanPreco.innerText = `R$ ${valor},00`
    tagBtnComprar.type = "button"
    tagBtnComprar.innerText = "Remover do Carrinho"
  
    tagDivImg.appendChild(tagImg)
    tagDivContent.append(tagH2Nome, tagSpanPreco, tagBtnComprar)
    
    tagLi.append(tagDivImg, tagDivContent)

    return tagLi
}


ulProdutos.addEventListener("click", interceptandoProduto)

let carrinhoCompras = []

function interceptandoProduto(event){

    let btnComprar  = event.target
    
    if(btnComprar.tagName == "BUTTON"){
    
        let idProduto = btnComprar.id
        let produto = data.find(function(produto){

            if(produto.id == idProduto){
                return produto
            }
            
        })
        adicionarCarrinho(produto)
        calcularTotal(carrinhoCompras)
    }
}

function adicionarCarrinho(produto){

    if(produto !== undefined){
        carrinhoCompras.push(produto)

        listarProdutos(carrinhoCompras, ulCarrinho)
    }
 
}

function removerProduto(event){
    let btnRemover = event.target

    if(btnRemover.tagName == "BUTTON"){
        for(let i = 0; i < carrinhoCompras.length; i++){
            btnRemover.id = `${i}`
        }
       
        let index = btnRemover.id
        console.log(index)
        
        carrinhoCompras.splice(index, 1)
        carrinhoCompras.innerText = ""
        listarProdutos(carrinhoCompras, ulCarrinho)
        calcularTotal(carrinhoCompras)
    }
}
ulCarrinho.addEventListener("click", removerProduto)

function calcularTotal(array){
    let quantidade = array.length
    let total      = 0

    for(let i = 0; i < array.length; i++){
        let valor = array[i].value
        total += valor
    }

    document.querySelector(".totalPreco").innerText = `R$ ${total},00`
    document.querySelector(".quantidade").innerText = `${quantidade}`
}

let finalizarCompra = document.querySelector("#finalizarCompra")
finalizarCompra.addEventListener("click", function(){
    alert("Compra efetuada com sucesso!")
    document.querySelector(".ulCarrinho").innerHTML = `<p id="carrinhoVazio">Carrinho Vazio</p> <p id="AdicioneItens">Adicione Itens</p>`
    carrinhoCompras.splice(0, carrinhoCompras.length)
    document.querySelector(".totalPreco").innerText = "R$ 0,00"
    document.querySelector(".quantidade").innerText = "0"
})


let inputBusca  = document.querySelector("form input")
let btnBusca    = document.querySelector("form button")

inputBusca.addEventListener("keyup", function(event){
    
    if(event.keyCode == 13){

        let pesquisaUsuario = inputBusca.value

        let resultadoBusca  = busca(pesquisaUsuario)

        listarProdutos(resultadoBusca, ulProdutos)

    }
})

btnBusca.addEventListener("click", function(event){
    let btnBuscar  = event.target
    
    if(btnBuscar.tagName == "BUTTON"){
        let pesquisaUsuario = inputBusca.value
        let resultadoBusca  = busca(pesquisaUsuario)

        listarProdutos(resultadoBusca, ulProdutos)

    }
})

function busca(valorPesquisa){
    
    let resultBusca = []

    for(let i = 0; i<data.length; i++){
        
        let pesquisa    = valorPesquisa.toLowerCase()
        let nomeProduto = data[i].nameItem.toLowerCase()
        let categoria   = data[i].tag[0].toLowerCase()
        
        if(nomeProduto.includes(pesquisa) || categoria.includes(pesquisa)){
            resultBusca.push(data[i])
        }
    }

    return resultBusca
}