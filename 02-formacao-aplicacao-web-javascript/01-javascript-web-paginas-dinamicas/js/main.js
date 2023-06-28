const listBtn = document.querySelectorAll('.tecla');
const listAudio = document.querySelectorAll('audio');

listBtn.forEach((tecla, i) => {
    tecla.addEventListener('click', () => {
        listAudio[i].play();
    })
})