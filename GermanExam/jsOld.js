function startup() {
  $("#mainContainer").removeClass("hide").fadeOut(1);
  setTimeout(function(){
    $("#startup").fadeOut(500);
    setTimeout(function(){
      $("#mainContainer").fadeIn(500);
    }, 500);
  }, 500);
}
