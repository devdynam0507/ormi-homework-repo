
export const useImageFetcher = (limit, source, ref, elementFactory) => {
    let page = 1;

    async function fetchAndRender() {
        const images = await fetchImage();
        const elements = images.map(image => elementFactory(image.download_url));

        elements.forEach(el => ref.appendChild(el));
        page += 1;
    }

    async function fetchImage() {
        console.log(page);
        const response = await fetch(`${source}?page=${page}&limit=${limit}`);
        return await response.json();
    }

    return fetchAndRender;
}