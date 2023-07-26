const form = document.querySelector('#novoItem');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = e.target.elements['nome'].value;
    const quantidade = e.target.elements['quantidade'].value;

    criarElemento(nome, quantidade);
})

function criarElemento (nome, quantidade) {
    
}