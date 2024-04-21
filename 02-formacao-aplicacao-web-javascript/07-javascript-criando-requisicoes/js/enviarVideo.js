import { conectaAPI } from "./conectaAPI.js";

const form = document.querySelector('[data-form]');

async function enviarVideo(evento) {
    evento.preventDefault();
    
    const img = document.querySelector('[data-img]').value;
    const url = document.querySelector('[data-url]').value;
    const title = document.querySelector('[data-title]').value;
    const desc = Math.floor(Math.random() * 10).toString();

    try {
        await conectaAPI.criarVideos(title, desc, url, img);
        window.location.href = '../pages/envio-concluido.html';
    }

    catch (erro){
        const errorMsg = document.createElement('h2');
        errorMsg.className = 'mensagem__titulo__erro';
        errorMsg.innerText = `${erro}`
        form.appendChild(errorMsg);
    }

}

form.addEventListener('submit', evento => enviarVideo(evento));