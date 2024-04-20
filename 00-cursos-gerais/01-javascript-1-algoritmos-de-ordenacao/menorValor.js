function menorValor(array, posicaoInicial) {

    let maisBarato = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < array.length; atual++) {
        if (array[atual].preco < array[maisBarato].preco) {
            maisBarato = atual;
        }
    }

    return maisBarato;
}

module.exports = menorValor;