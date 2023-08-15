window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const buttonStart = document.querySelector('[data-btn]');
const speechText = document.querySelector('.box');

recognition.lang = 'pt-Br';

// recognition.start();

buttonStart.addEventListener('click', () => {
    recognition.start();
    console.log('Iniciou');
    buttonStart.innerHTML = 'Ouvindo...';
})

recognition.addEventListener('result', speechResult)

function speechResult(e) {
    speechText.innerHTML = e.results[0][0].transcript;
}