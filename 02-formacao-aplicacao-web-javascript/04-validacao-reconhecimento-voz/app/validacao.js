function validacao(chute) {
    const numero = parseInt(chute);

    if (Number.isNaN(numero)) {
        console.log('Não é um número');
    }

    if (numberInsideRange(numero)) {
        console.log('Número fora do alcance')
    }

    function numberInsideRange (chute) {
        return chute < menorValor  || chute > maiorValor;
    }
}