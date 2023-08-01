const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista');

function criarElemento (nome, quantidade) {
    const novoItem = document.createElement('li');
    const quantidadeItem = document.createElement('strong');

    novoItem.classList.add('item');
    quantidadeItem.innerHTML = quantidade;
    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    criarElemento(nome.value, quantidade.value);

    nome.value = '';
    quantidade.value = '';
})