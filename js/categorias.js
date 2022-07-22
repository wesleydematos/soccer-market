let nav = document.querySelector("nav")
let todos = document.querySelector("#todos")
let camisas = document.querySelector("#camisas")
let shorts = document.querySelector("#shorts")
let chuteiras = document.querySelector("#chuteiras")


nav.addEventListener("click", listaCategoria)

function listaCategoria(event){
    let arrCategoria = []
    
    let btnCategoria  = event.target
    console.log(btnCategoria.tagName)
    
    if(btnCategoria.tagName == "STRONG"){
        listarProdutos(data, ulProdutos)
    }else if(btnCategoria.tagName == "A" && btnCategoria.id == "camisas"){
        for(let i = 0; i < data.length; i++){
            if(data[i].tag[0].includes("Camisas")){
                arrCategoria.push(data[i])
            }
        }
        ulProdutos.innerHTML = ""
        listarProdutos(arrCategoria, ulProdutos)
    }else if(btnCategoria.tagName == "A" && btnCategoria.id == "shorts"){
        for(let i = 0; i < data.length; i++){
            if(data[i].tag[0].includes("Shorts")){
                arrCategoria.push(data[i])
            }
        }
        ulProdutos.innerHTML = ""
        listarProdutos(arrCategoria, ulProdutos)
    }else if(btnCategoria.tagName == "A" && btnCategoria.id == "chuteiras"){
        for(let i = 0; i < data.length; i++){
            if(data[i].tag[0].includes("Chuteiras")){
                arrCategoria.push(data[i])
            }
        }
        ulProdutos.innerHTML = ""
        listarProdutos(arrCategoria, ulProdutos)
    }
}
