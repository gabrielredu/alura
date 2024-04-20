let livros = [];
const livrosDiv = document.querySelector('#livros');
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const botoes = document.querySelectorAll('.btn');
const btnOrdenar = document.querySelector('#btnOrdenarPorPreco');
const btnDisponiveis = document.querySelector('#btnLivrosDisponiveis');
const valorTotalSection = document.querySelector('#valor_total_livros_disponiveis');

valorTotalSection.innerHTML = '';

botoes.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.attributes.value == undefined) {
            return
        }

        let livrosFiltrados = filtrarLivros(btn.attributes.value.value);
        exibirLivros(livrosFiltrados);
    })

})

async function buscarLivrosAPI() {
    try {
        const res = await fetch(endpointAPI);
        livros = await res.json();
        console.table(livros);
        let livrosComDesconto = aplicarDesconto(livros);
        exibirLivros(livros);
    }

    catch {

    }
}

// map function
function aplicarDesconto(livros) {
    const desconto = .3;
    livrosComDesconto = livros.map ((livro) => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto;
}

// foreach function
function exibirLivros (lista) {
    valorTotalSection.innerHTML = '';
    livrosDiv.innerHTML = '';
    lista.forEach((livro) => {
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        livrosDiv.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}

// filter function
function filtrarLivros (categoria) {
    let livrosFiltro = livros.filter((livro) => {
        return livro.categoria == categoria;
    })
    return livrosFiltro;
}

// sort function
btnOrdenar.addEventListener('click', () => {
    let livrosOrdenados = livros.sort((a, b) => {
        return a.preco - b.preco
    })
    exibirLivros(livrosOrdenados);
})

function livrosDisponiveis() {
    let livrosDisponiveis = livros.filter((livro) => {
        return livro.quantidade > 0
    })
    return livrosDisponiveis;
}

function valorTotalLivros(livros) {
    let valorTotal = livros.reduce((acc, livro) => {
        return acc + livro.preco;
    })
    console.log(valorTotal)
    return valorTotal;
}

btnDisponiveis.addEventListener('click', () => {
    let disponiveis = livrosDisponiveis();
    let valorTotalFunc = valorTotalLivros(livros);
    exibirLivros(disponiveis);
    valorTotalSection.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalFunc}</span></p>
        </div>
    `
})

buscarLivrosAPI();