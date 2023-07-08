DEFAULT_MODE = 'light';

function switchTheme(sel) {
    if($(sel).hasClass('light')) {
        $(sel).removeClass('light');
        $(sel).addClass('dark');
    }
    else {
        $(sel).removeClass('dark');
        $(sel).addClass('light');
    }
}

function switchGithubIcons() {
    const sels = ['#github-logo', '.github-link']

    sels.forEach( sel => {
        const elems = $(sel);

        elems.each( (i, elem) => {
            if(elem.src.includes('github-mark.png')) {
                elem.src = 'img/github-mark-white.png';
            }
            else {
                elem.src = 'img/github-mark.png';
            }
        });
    });
}

$('#switch-input').on('click', function() {
    switchTheme('body');
    switchTheme('.nav-container');
    switchTheme('.sidenav-link');
    switchGithubIcons();
});
