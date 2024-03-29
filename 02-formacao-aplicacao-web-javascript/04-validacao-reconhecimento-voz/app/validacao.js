function validacao(chute) {
    const numero = parseInt(chute);

    if (isNotANumber(numero)) {
        chuteElements.innerHTML += `<div class="erro">Você precisa falar somente números!</div>`;
        return
    }

    if (numberInsideRange(numero)) {
        chuteElements.innerHTML += `<div class="alerta">Você precisa falar números entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if (numero < numeroGerado) {
        chuteElements.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    } else {
        chuteElements.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }

    if (numero === numeroGerado) {
        document.body.innerHTML = `
            <h1>Parabéns!</h1>
            <h3>Você acertou! O número secreto era ${numeroGerado}!<br></h3>
            <h3>Deseja jogar outra vez?</h3>
            <button class="start-game">Jogar outra vez</button>
        `
        
        const buttonRestart = document.querySelector('.start-game');

        buttonRestart.addEventListener('click', () => {
            document.location.reload();
        })
    }

    function numberInsideRange (chute) {
        return chute < menorValor  || chute > maiorValor;
    }

    function isNotANumber (chute) {
        return Number.isNaN(chute);
    }
}