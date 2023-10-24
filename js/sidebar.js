class Topbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
    }
}


window.customElements.define('top-nav', Topnav);
