const lista = [
    {
        id: 1,
        imagem: "img/produtos/Controle.png", 
        nome: "Controlador Sem Fio Gamesir",
        preco: 128.35  
    },

    {
        id: 2,
        imagem: "img/produtos/Mouse.png", 
        nome: "Mouse HyperX Pulsefire Haste2",
        preco: 463.00    
    },

    {
        id: 3,
        imagem: "img/produtos/MousePad.png", 
        nome: "Mousepad Fallen Eco",
        preco: 216.50
    },

    {
        id: 4,
        imagem: "img/produtos/Notebook.png", 
        nome: "Notebook Aspire Go",
        preco: 2520.00  
    },

    {
        id: 5,
        imagem: "img/produtos/SmartPhone.png", 
        nome: "Smartphone Huawei Mate",
        preco: 32900.00
    },
    {
        id: 6,
        imagem: "img/produtos/SmartTV.png", 
        nome: "Smart Tv 115 Qled 4K",
        preco: 149999.00
    },
    {
        id: 7,
        imagem: "img/produtos/SmartWatch.png", 
        nome: "SmartWatch Orient Preto",
        preco: 299.90
    },
    {
        id: 8,
        imagem: "img/produtos/Teclado.png", 
        nome: "Teclado Aula F75 Preto",
        preco: 727.42    
    }
]

function formatarPreco(preco) {
    return preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}
function carregarProdutosCard(lista) { 
        
    return `
        <div class="produtos-card">
            <img src="${lista.imagem}" alt="${lista.nome}" class="produto-imagem">  
            <h3 class="produto-nome">${lista.nome}</h3>
            <div class="produto-preco">${formatarPreco(lista.preco)}</div>
        </div>
    `
}     

function mostrarProdutos(lista) {
    const grade = document.getElementById('produtos')
    grade.innerHTML = lista.map(carregarProdutosCard).join('')
}

function procurarProdutos() {
    const botaoPesquisa = document.getElementById('search-bar').value.toLowerCase()

    const produtosFiltrados = lista.filter(lista => lista.nome.toLowerCase().includes(botaoPesquisa))

    mostrarProdutos(produtosFiltrados)
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarProdutos(lista)

    document.getElementById('pesquisar').addEventListener('click', procurarProdutos)

})
 


