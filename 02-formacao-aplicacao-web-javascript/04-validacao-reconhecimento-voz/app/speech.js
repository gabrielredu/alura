window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new webkitSpeechRecognition();
const buttonStart = document.querySelector('[data-btn]');

recognition.lang = 'pt-Br';

// recognition.start();

buttonStart.addEventListener('click', () => {
    recognition.start();
    console.log('Iniciou');
    buttonStart.innerHTML = 'Ouvindo...';
})

recognition.addEventListener('result', speechResult)

function speechResult(e) {
    console.log(e);
}