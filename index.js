
const APIController = (function() {
    const clientId = '59ae3f81a053447294bfe1bc4cae3c9d';
    const clientSecret = 'cdb475cb99c34693b2eed63068a902a6';

    const accessToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    };

    const searchMusic = async (token, query = 'gospel') => {
        const result = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album&market=US`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token }
        });

        const data = await result.json();
        return data.albums.items;
    };

    return {
        getToken() {
            return accessToken();
        },
        searchMusic(token, query = 'gospel') {
            return searchMusic(token, query);
        }
    };
})();

const UIController = (function() {
    const DOMElements = {
        resultsContainer: '#resultsContainer'
    };

    return {
        displayMusic(albums) {
            const container = document.querySelector(DOMElements.resultsContainer);
            container.innerHTML = '';
            albums.forEach(album => {
                const albumEl = document.createElement('div');
                albumEl.className = 'album';
                albumEl.innerHTML = `
                    <div><img src="${album.images[0] ? album.images[0].url : 'https://via.placeholder.com/400'}" alt="Album cover"></div>
                    <div><h4>${album.name}</h4><p>Artist: ${album.artists.map(artist => artist.name).join(", ")}</p>
                    <button onclick="window.open('${album.external_urls.spotify}', '_blank')">Listen on Spotify</button></div>
                `;
                container.appendChild(albumEl);
            });
        }
    };
})();

async function searchMusic(searchTerm = 'cece winans') {
    const input = document.getElementById('searchInput').value.trim() || searchTerm;
    const token = await APIController.getToken();
    const albums = await APIController.searchMusic(token, input);
    UIController.displayMusic(albums);
}

document.addEventListener('DOMContentLoaded', function() {
    searchMusic(); // Load default search results for "romantic"
});

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchMusic(document.getElementById('searchInput').value);
    }
});

document.querySelector('button').addEventListener('click', function() {
    searchMusic(document.getElementById('searchInput').value);
});
