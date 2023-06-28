const listBtn = document.querySelectorAll('.tecla');
const listAudio = document.querySelectorAll('audio');

listBtn.forEach((tecla, i) => {
    tecla.addEventListener('keydown', (event) => {
        if (event.key == 'Enter' || event.key == ' ') {
            listAudio[i].play()
            tecla.classList.add('ativa');
        }
    })

    tecla.addEventListener('keyup', (event) => {
        if (event.key == 'Enter' || event.key == ' ') {
            tecla.classList.remove('ativa');
        }
    })
})