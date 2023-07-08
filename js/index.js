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

