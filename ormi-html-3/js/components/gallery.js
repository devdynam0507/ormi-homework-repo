import { Component } from "./component.js";
import {useImageFetcher} from "../hooks/useImageFetcher.js";

class GalleryItem extends Component {

    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['url'];
    }

    render() {
        this.innerHTML = `
            <div class="shadow-box gallery-img-box" style="background-image: url('${this.attr('url')}')"></div>
        `
    }
}

class Gallery extends Component {

    constructor() {
        super();
        this.initialData = [
            'assets/png/img_cat2.jpeg',
            'assets/png/img_cat3.jpeg',
            'assets/png/img_cat4.jpeg',
            'assets/png/img_cat5.jpeg',
            'assets/png/img_cat6.jpeg',
            'assets/png/img_cat7.jpeg',
        ]
    }

    connectedCallback() {
        super.connectedCallback();
        super.addEventListener('click', () => {
            this.fetcher();
        }, 'showmore');
        this.fetcher = useImageFetcher(
            6,
            'https://picsum.photos/v2/list',
            super.ref('galleries'),
            (url) => {
                const div = document.createElement('div');
                div.className = 'shadow-box gallery-img-box';
                div.style.backgroundImage = `url("${url}")`;

                return div;
            }
        )
    }

    render() {
        this.innerHTML = `
            <section>
              <article class="gallery-container">
                <div id="galleries" class="gallery-grid">
                    ${this.initialData.map(url => `
                        <gallery-item url="${url}"></gallery-item>
                    `).join(' ')}
                </div>
        
                <div class="gallery-bottom">
                  <span>Continue exploring HODU</span>
                  <common-button id="showmore" text="Show more""></common-button>
                </div>
              </article>
            </section>
       `
    }
}

window.customElements.define('gallery-component', Gallery);
window.customElements.define('gallery-item', GalleryItem);