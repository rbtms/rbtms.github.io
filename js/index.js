if(document.URL.includes('#projects')) {
    $('#aboutme').hide();
    $('[href="#aboutme"]').removeClass('active');
    $('[href="#projects"]').addClass('active');
}
else {
    $('#projects').hide();
    $('[href="#projects"]').removeClass('active');
    $('[href="#aboutme"]').addClass('active');
}

$(".sidenav-link").on("click", function() {
  $('.sidenav-link.active').removeClass("active");
  $(this).addClass("active");

  if(this.href.includes('#projects')) {
    $('#aboutme').hide();
    $('#projects').show();
  }
  else if(this.href.includes('#aboutme')) {
    $('#projects').hide();
    $('#aboutme').show();
  }
});

/* Widen the click area of the a tags inside the buttons */
$($('button')[0]).on('click', () => $('.a-pdf')[0].click() )
$($('button')[1]).on('click', () => $('.a-pdf')[1].click() )
