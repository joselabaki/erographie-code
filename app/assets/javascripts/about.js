$( document ).ready(function() {

$('#close-faq').click(function() {
  $(this).hide();
  $('#c-arrow').show();
  $('.faq-c').slideUp('slow');
})



$('#c-arrow').click(function() {
  $(this).hide();
  $('#close-faq').show();

  $('.faq-c').slideDown('slow')
})

$('#close-faq').click(function() {
  $(this).hide();
  $('#c-arrow').show();
  $('.faq-c-phone').slideUp('slow');
})



$('#c-arrow').click(function() {
  $(this).hide();
  $('#close-faq').show();

  $('.faq-c-phone').slideDown('slow')
})

});
