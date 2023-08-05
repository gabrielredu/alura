const form = document.querySelector('#novoItem');
const lista = document.querySelector('#lista');
const itens = JSON.parse(localStorage.getItem('Itens da lista')) || [];

itens.forEach((elemento) => {
    criarElemento(elemento);
})

function criarElemento (item) {
    const novoItem = document.createElement('li');
    const quantidadeItem = document.createElement('strong');

    novoItem.classList.add('item');
    quantidadeItem.innerHTML = item.Quantidade;
    quantidadeItem.dataset.id = item.id;
    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += item.Nome;

    lista.appendChild(novoItem);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    const existe = itens.find((elemento) => {
        elemento.nome === nome.value;
    })

    const itemAtual = {
        'Nome': nome.value,
        'Quantidade': quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id;
    } else {
        itemAtual.id = itens.length
        criarElemento(itemAtual);
        itens.push(itemAtual);
    }

    localStorage.setItem('Itens da lista', JSON.stringify(itens));

    nome.value = '';
    quantidade.value = '';
})