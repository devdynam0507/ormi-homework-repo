import {Component} from "./component.js";

class CommonButton extends Component {

    constructor() {
        super();
    }

    render() {
        const buttonEl = document.createElement('button');
        buttonEl.className = 'common-button';
        const spanEl = document.createElement('span');
        spanEl.innerText = this.attr('text');
        buttonEl.appendChild(spanEl);
        buttonEl.onclick = this.onclick;
        console.log(this.onclick)

        this.appendChild(buttonEl);
    }
}

window.customElements.define('common-button', CommonButton);
