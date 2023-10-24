class Topnav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div id='topnav'>
            <div class='topnav-container'>
                <button id='menu-button'>☰</button>
                <span id='topnav-name'>Álvaro Fernández</span>
            </div>
`;
    }
}


window.customElements.define('top-nav', Topnav);
