async function buscarEndereco(cep) {
    const msgErro = document.querySelector('.erro');
    msgErro.innerHTML = '';
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('Deu ruim, hein? CEP não existe!');
        }
        const uf = document.querySelector('#estado');
        const cidade = document.querySelector('#cidade');
        const bairro = document.querySelector('#bairro');
        const logradouro = document.querySelector('#endereco');

        uf.value = consultaCEPConvertida.uf;
        cidade.value = consultaCEPConvertida.localidade;
        bairro.value = consultaCEPConvertida.bairro;
        logradouro.value = consultaCEPConvertida.logradouro;

        console.log (consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        msgErro.innerHTML = `<p style="margin-top: 8px; background-color: rgb(255, 30, 30); color: #fff; padding: 4px;">CEP inválido! Preencha o CEP com 8 dígitos.</p>`
        console.log(erro);
    }
}

const cep = document.querySelector('#cep');

cep.addEventListener('focusout', () => {
    buscarEndereco(cep.value);
})

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