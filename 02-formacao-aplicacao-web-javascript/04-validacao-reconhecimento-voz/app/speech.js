window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const buttonStart = document.querySelector('[data-btn]');
const chuteElements = document.querySelector('#chute');

recognition.lang = 'pt-Br';

// recognition.start();

buttonStart.addEventListener('click', () => {
    recognition.start();
    buttonStart.innerHTML = 'Ouvindo...'
})

recognition.addEventListener('result', speechResult)

recognition.addEventListener('audioend', () => {
    buttonStart.innerHTML = 'Tentar de novo';
})

function speechResult(e) {
    const speech = e.results[0][0].transcript;
    exibirChute(speech);
    validacao(speech);
}

function exibirChute(speech) {
    chuteElements.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${speech}</span>
    `
}