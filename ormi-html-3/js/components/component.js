
export class Component extends HTMLElement {

    constructor() {
        super();
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    addEventListener(type, listener, id) {
        const el = document.getElementById(id);
        console.log(el);
        el.addEventListener(type, listener);
    }

    attr(name) {
        return this.getAttribute(name);
    }

    ref(id) {
        return document.getElementById(id);
    }

    render() {}
}

export class ButtonComponent extends HTMLButtonElement {

    constructor() {
        super();
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    }

    connectedCallback() {
        this.addEventListener('click', () => this.attr('onClick'));
        this.render();
    }

    attr(name) {
        return this.getAttribute(name);
    }

    ref(id) {
        return document.getElementById(id);
    }

    render() {}
}
