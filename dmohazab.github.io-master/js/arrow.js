$(document).ready(function() {
  $('.slide-section').click(function(e){

    var linkHref = $(this).attr('href');

    $('body,html').animate({
      scrollTop: $(linkHref).offset().top
    }, 1000);

    e.preventDefault();
    });
  });
