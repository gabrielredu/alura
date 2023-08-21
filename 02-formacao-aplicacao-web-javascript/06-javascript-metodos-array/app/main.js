let livros = [];
const livrosDiv = document.querySelector('#livros');
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const botoes = document.querySelectorAll('.btn');

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
    livrosDiv.innerHTML = '';
    lista.forEach((livro) => {
        livrosDiv.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
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

function filtrarLivros (categoria) {
    let livrosFiltro = livros.filter((livro) => {
        return livro.categoria == categoria;
    })
    return livrosFiltro;
}

buscarLivrosAPI();