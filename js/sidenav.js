class Sidenav extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.render();
    }

    render() {
        const activePage = this.getAttribute('activePage');

        this.innerHTML = `<div id='sidenav'>
            <div class='nav-container' class='light'>
                <a class='sidenav-link light ` + (activePage == 'aboutme' ? 'active' : '')
                + `' href='index.html'>About me</a>
            </div>

            <div class='nav-container' class='light'>
                <a class='sidenav-link light ` + (activePage == 'projects' ? 'active' : '')
                + `' href='projects.html'>Projects</a>
            </div>

            <!-- Site links -->

            <a href='https://github.com/rbtms'>
                <img id='github-logo' src='img/github-mark.png'>
            </a>
         </div>
`
    }
}

window.customElements.define('side-nav', Sidenav);

