LOCALSTORAGE_MODE = 'DM_activeMode';

class DarkmodeSlider extends HTMLElement {
    constructor() {
        super();
        this.setModeElems();
    }
    
    connectedCallback() {
        this.render();
        this.addEventListener('mousedown', this.handleClick, true);
    }

    render() {
        this.innerHTML = `
             <div id='slider'>
                 <label class="switch">`
                    + (this.getMode() == 'light'
                        ? `<input id='switch-input' type="checkbox">`
                        : `<input id='switch-input' type="checkbox" checked="true">`)
                + `<span class="slider round"></span>
                </label>
             </div>
        `;
    }

    /* Get active mode from localStorage, set light if none */
    getMode() {
        let mode = localStorage.getItem(LOCALSTORAGE_MODE);

        if (mode == null) {
            mode = 'light';
            localStorage.setItem(LOCALSTORAGE_MODE, 'light');
        }

        return mode;
    }

    /* Set localStorage */
    setMode(mode) {
        localStorage.setItem(LOCALSTORAGE_MODE, mode);
    }

    /* Switch mode in localStorage */
    switchMode() {
        if (this.getMode() == 'light') {
            this.setMode('dark');
        } else {
            this.setMode('light');
        }
    }

    /* Handle switch click */
    handleClick() {
        this.switchMode();
        this.setModeElems();
    }

    /*
     * Changes that affect other elements
     */

    /* Set the active class in an element */
    setModeElem(sel) {
        const mode = this.getMode();

        $(sel).removeClass('light');
        $(sel).removeClass('dark');
        $(sel).addClass(mode);
    }

    /* Set the image of github icons */
    setModeGithubIcons() {
        const sels = ['#github-logo', '.github-link']
        const mode = this.getMode();

        sels.forEach( sel => {
            $(sel).each( (i, elem) => {
                if (mode == 'light') {
                    elem.src = 'img/github-mark.png';
                } else {
                    elem.src = 'img/github-mark-white.png';
                }
            });
        });
    }
    
    /* Set the active class in all relevant elements */
    setModeElems() {
        this.setModeElem('body');
        this.setModeElem('.nav-container');
        this.setModeElem('.sidenav-link');
        this.setModeGithubIcons();
    }
}

/* Define element tag */
window.customElements.define('darkmode-slider', DarkmodeSlider);

/* Set light mode as default */
if (localStorage.getItem(LOCALSTORAGE_MODE) == null) {
    localStorage.setItem(LOCALSTORAGE_MODE, 'light');
}

