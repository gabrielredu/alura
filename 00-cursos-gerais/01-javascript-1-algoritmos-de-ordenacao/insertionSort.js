const livros = require('./listaLivros.js');

function insertionSort(lista) {
    for (let atual = 0; atual < lista.length; atual ++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            let itemAnalisado = lista[analise];
            let itemAnterior = lista[analise - 1];

            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalisado;

            analise--
        }
    }
    console.log(lista);
}

insertionSort(livros);