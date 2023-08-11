const numeroGerado = geradorNumero();

function geradorNumero() {
    return parseInt(Math.random() * 100);
}

console.log(`O número gerado é: ${numeroGerado}`);