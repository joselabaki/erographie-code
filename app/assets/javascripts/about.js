$(document).on('turbolinks:load', function() {

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
  $('.faq-c-phone').slideUp('slow');
  $(this).hide();
  $('#c-arrow').show();
})



$('#c-arrow').click(function() {
  $('.faq-c-phone').slideDown('slow')

  $(this).hide();
  $('#close-faq').show();

})
});
