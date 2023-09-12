const camposFormulario = document.querySelectorAll('[required]');
camposFormulario.forEach((campo) => {
    campo.addEventListener('blur',() => {
        validarCampo(campo);
    })
})

function validarCampo(campo) {

}