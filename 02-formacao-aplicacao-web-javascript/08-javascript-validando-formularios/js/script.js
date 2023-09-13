import ehUmCpf from "./valida-cpf.js";

const camposFormulario = document.querySelectorAll('[required]');
camposFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => {
        validarCampo(campo);
    })
})

function validarCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCpf(campo);
    }
}