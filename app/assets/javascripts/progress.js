$( document ).ready(function() {

  $('form').on('submit' , function(event){
  event.preventDefault();

  var formData = new FormData($('form')[0]);


  $.ajax({
xhr : function () {
  var xhr = new window.XMLHttpRequest();

xhr.upload.addEventListener('progress' , function(e) {
  if (e.lengthComputable){
    console.log("loaded: " + e.loaded);
    console.log("total " + e.total);
    console.log("percentage : " + (e.loaded/e.total))


    var percent = Math.round((e.loaded /  e.total) * 100);
    $('#percent').text(percent + '%')
  }

})




  return xhr;
},
type : 'POST',
url : "/eronotes",
data : formData,
 processData: false ,
 contentType : false ,
 success : function(){
 }


  });

  });

});
