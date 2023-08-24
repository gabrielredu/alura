async function videosAPI() {
    const endpoint = await fetch('http://localhost:3000/videos');
    const endpointJSON = await endpoint.json();

    return endpointJSON;
}

async function criarVideos(titulo, descricao, url, imagem) {
    const endpoint = await fetch('http://localhost:3000/videos',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações.`,
            url: url,
            imagem: imagem
        })
    });
    const endpointJSON = await endpoint.json();
    return endpointJSON;
}

export const conectaAPI = {
    videosAPI,
    criarVideos
}