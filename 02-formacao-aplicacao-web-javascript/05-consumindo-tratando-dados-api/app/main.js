async function buscarEndereco() {
    try {
        const consultaCEP = await fetch('https://viacep.com.br/ws/95030580/json/');
        const consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('Deu ruim, hein? CEP não existe!');
        }
        console.log (consultaCEPConvertida);
    } catch (erro) {
        console.log(erro);
    }
}

buscarEndereco();

// .then((r) => {
//     return r.json();
// })
// .then((r) => {
//     if (r.erro) {
//         throw Error('Erro! CEP não existe!');
//     } else {
//         console.log(r)
//     }
// })
// .catch((erro) => {
//     console.log(erro);
// })