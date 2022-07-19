let ulProdutos       = document.querySelector(".ulProdutos")
let ulCarrinho       = document.querySelector(".ulCarrinho")
ulCarrinho.innerHTML = `<p id="carrinhoVazio">Carrinho Vazio</p><p id="AdicioneItens">Adicione Itens</p>`

function listarProdutos(listaProdutos, secao){
    secao.innerHTML = ""
    for(let i = 0; i<listaProdutos.length; i++){
        let produto        = listaProdutos[i]
        let cardProduto    = criarCardProduto(produto)
        secao.appendChild(cardProduto)
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