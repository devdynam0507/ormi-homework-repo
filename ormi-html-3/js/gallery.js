const API_ENDPOINT = 'https://picsum.photos/v2/list';

function createGalleryImage(url) {
    const div = document.createElement('div');
    div.className = 'shadow-box gallery-img-box';
    div.style.backgroundImage = `url("${url}")`;

    return div;
}

function render(data, containerId) {
    const container = document.getElementById(containerId);

    data.forEach(v => {
        const imageBox = createGalleryImage(v.download_url);
        container.appendChild(imageBox);
    })
}

async function fetchMoreGalleryPictures(containerId, limit) {
    const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=${limit}`);
    const data = await response.json();

    render(data, containerId);
}