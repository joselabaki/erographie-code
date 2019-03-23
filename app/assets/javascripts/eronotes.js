document.addEventListener("turbolinks:load", function() {
window.onload = function(){
  const customBtn = document.getElementById("browse-btn");
  const realFileBtn = document.getElementById("real-file");
  const customTxt = document.getElementById("customTxt");
  const customUpBtn = document.getElementById("upTxt");
  const empty = document.getElementById('remove');
  const realUpBtn = document.getElementById("upload-btn");



customBtn.addEventListener("click", function() {
    realFileBtn.click();
  });

  realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
      customTxt.innerHTML =  realFileBtn.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1];

      customUpBtn.style.color = "#E2DEDC";
      customUpBtn.classList.remove("disabled")
      customUpBtn.classList.add("able")
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


  customUpBtn.addEventListener("click", function() {
    realUpBtn.click();
  });

};


});
