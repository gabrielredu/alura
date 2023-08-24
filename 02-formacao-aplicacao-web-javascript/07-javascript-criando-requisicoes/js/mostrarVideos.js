import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector('[data-lista]');

function constroiCard(elemento) {
    const video = document.createElement('li');
    video.className = 'videos__item';
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${elemento.url}"
        title="${elemento.titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${elemento.imagem}" alt="logo canal alura">
        <h3>${elemento.titulo}</h3>
        <p>${elemento.descricao}</p>
    </div>
    `
    return video;
}

async function listaVideos() {
    const listaAPI = await conectaAPI.videosAPI();
    // listaAPI.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    listaAPI.forEach((elemento) => {
        lista.appendChild(constroiCard(elemento));
    });
}

listaVideos();