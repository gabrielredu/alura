import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscaVideos(evento) {
    evento.preventDefault();
    const dadosBusca = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaAPI.buscarVideos(dadosBusca);
    const lista = document.querySelector('[data-lista]');

    lista.innerHTML = '';
    
    busca.forEach(elemento => {
        lista.appendChild(constroiCard(elemento));
    });

    if (busca.length == 0) {
        lista.innerHTML = `Nenhum vídeo foi encontrado com esse termo.`;
    }
}

const botaoPesquisa = document.querySelector('[data-pesquisa-botao]');
botaoPesquisa.addEventListener('click', evento => {
    buscaVideos(evento);
});