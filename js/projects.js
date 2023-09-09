projects = [
    {
        name  : 'Termice',
        desc  : 'Terminal application with an ineteractable TUI to listen to net radio.',
        imgurl: 'https://user-images.githubusercontent.com/14959143/55671226-50'
              + '20e480-587d-11e9-90be-a090ef096d98.png',
        repo  : 'https://github.com/rbtms/termice'
    }, {
        name  : 'tripperjs',
        desc  : 'Implementation of the 2ch tripcode algorithm through 3DES on Javascript.',
        imgurl: 'https://camo.githubusercontent.com/d818be4e81c7f9d6109917f8ac249653ebe9c83d70d'
              + '56b5d0a17a4016148c647/68747470733a2f2f692e696d6775722e636f6d2f686e34466a6f722e706e67',
        repo  : 'https://github.com/rbtms/tripperjs'
    }, {
        name  : 'dekku',
        desc  : 'Simple React JLPT flipcards with examples from jisho.org.',
        imgurl: 'https://camo.githubusercontent.com/2ceb1b8e4188d7ad697c9077220aa5c1f5318e7c608b'
              + '4262b3062f33418464d1/68747470733a2f2f692e696d6775722e636f6d2f496830543442692e706e67',
        repo : 'https://github.com/rbtms/dekku'
    }, {
        name  : 'Pastebin Codemonkey Editor',
        desc  : 'CodeMonkey edifor for Pastebin with syntax highlight and night mode',

        imgurl: 'https://user-images.githubusercontent.com/14959143/31885946-9a089d4a-b7f2-11e7-9c09-5c231f7b645d.png',
        repo  : 'https://github.com/rbtms/Pastebin-CodeMonkey-Editor'
    }, {
        name  : 'Webtorrent TUI',
        desc  : 'Simple TUI for the webtorrent terminal client.',
        imgurl: 'https://camo.githubusercontent.com/6ac50b25982cac34f7262cebe69f14c49cab14b3c94eee9186781ee1341a63b7/68747470733a2f2f692e696d6775722e636f6d2f396248317435462e676966',
        repo  : 'https://github.com/rbtms/webtorrent_tui'
    }, {
        name  : 'CHIP8 Emulator',
        desc  : 'Small interpreter and emulator for CHIP8.',
        imgurl: 'https://files.catbox.moe/onjlio.mp4',
        repo  : 'https://github.com/rbtms/CHIP8-emulator'
    }
]

function appendProject(elem, project, isLast) {
    img_html   = '<img class="project-pic" src="' + project.imgurl + '"/>'
    video_html = '<video controls class="project-pic" src="' + project.imgurl + '"></video>'
    
    project_html = '<div class="project">'
        + '  <span class="project-title">' + project.name
            + '<a href="' + project.repo + '">'
            +   '<img class="github-link" src="img/github-mark.png">' + 
            '</a>'
        + '</span>' 
        + (project.imgurl.includes('.mp4') ? video_html : img_html)
        + '  <span class="project-desc">' + project.desc + '</span>'
    + '</div>';
    
    if (!isLast) 
        project_html += '<hr>';

    elem.html(elem.html() + project_html);
}

/* Append all project elements */
parent_elem = $('.content');

projects.forEach( (project, i) => {
    appendProject(parent_elem, project, i == projects.length-1);
});

