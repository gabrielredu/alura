const menorValor = 1;
const maiorValor = 1000;

const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

const numeroGerado = geradorNumero();

function geradorNumero() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(`O número gerado é: ${numeroGerado}`);