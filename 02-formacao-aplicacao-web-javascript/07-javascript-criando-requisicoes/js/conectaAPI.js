async function videosAPI() {
    const endpoint = await fetch('http://localhost:3000/videos');
    const endpointJSON = await endpoint.json();

    return endpointJSON;
}

export const conectaAPI = {
    videosAPI
}