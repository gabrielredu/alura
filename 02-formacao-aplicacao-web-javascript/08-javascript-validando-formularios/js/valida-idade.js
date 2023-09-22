export default function validarIdade(campo) {
    const dataNascimento = new Date(campo.value)
    return validarData(dataNascimento);
}

function validarData(data) {
    const dataAtual = new Date();
    const dataMaioridade = new Date(data.getFullYear() + 18, data.getMonth(), data.getDate());

    return dataAtual >= dataMaioridade;
}