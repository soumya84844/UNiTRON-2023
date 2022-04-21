$(window).scroll(function() {
  if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background', '#0a0117');
  } else {
    $('.navbar').css('background', 'transparent');
  }
});
