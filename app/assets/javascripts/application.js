  // This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks

//= require_self
//= require_tree .

document.addEventListener("turbolinks:load", function() {

  const realFileBtn = document.getElementById("real-file");
  const customBtn = document.getElementById("browse-btn");
  const customTxt = document.getElementById("customTxt");
  const customUpBtn = document.getElementById("upTxt");
  const empty = document.getElementById('remove');



  customBtn.addEventListener("click", function() {
    realFileBtn.click();
  });

  realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
      customTxt.innerHTML =  realFileBtn.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1];

      customUpBtn.style.color = "#E2DEDC";
      empty.classList.remove("hidden");
      empty.addEventListener("click", function() {
                    realFileBtn.value = "";
                    customUpBtn.style.color = "#323232";
                    empty.className += "hidden"
                    if (document.location.pathname.indexOf("/en/") == 0){
                    customTxt.innerHTML = "no file chosen";
                    } else {
                    customTxt.innerHTML = "aucune  image";}});

    } else {
      customTxt.innerHTML = "no file chosen";
    }
  });

  const realUpBtn = document.getElementById("upload-btn");

  customUpBtn.addEventListener("click", function() {
    realUpBtn.click();
  });




});
