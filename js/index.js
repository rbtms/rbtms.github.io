/* Widen the click area of the a tags inside the buttons */
$($('button')[1]).on('click', () => $('.a-pdf')[0].click() )
$($('button')[2]).on('click', () => $('.a-pdf')[1].click() )

$('#menu-button').on('click', function(e) {
    /* Clicked on topbar */
    if( $('top-nav').css('display') !== 'none' ) {
        // Hide topnav
        $('top-nav').hide();

        // Move the menu button to the sidenav
        $('#sidenav').prepend($('#menu-button').css('position', 'absolute'));

        // Show sidenav
        $('#sidenav').css('width', '100%');
    /* Clicked on sidebar */
    } else {
        $('#sidenav').css('width', '0%');
        $('top-nav').show();
        $('.topnav-container').prepend($('#menu-button').css('position', 'absolute'));
    }
});
