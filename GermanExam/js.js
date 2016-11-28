function startup() {
  $("#mainContainer").removeClass("hide").fadeOut(1);
  setTimeout(function(){
    $("#startup").fadeOut(500);
    setTimeout(function(){
      $("#mainContainer").fadeIn(500);
    }, 500);
  }, 500);
}

$(document).ready(function() {
  $(".btn").click(function(event) {
    $(this).blur();
  });
  $(".btn").click(function() {
    $(this).addClass("hide");
    $("#mainContainer").append("<div style='margin: 20px 10px; border: 2px solid #fff; border-radius: 8px; background-color: #292929; padding: 5px;' id='germanNote"+this.value+"' class='collapse caption'><img src='https://res.cloudinary.com/spidiritsu/image/upload/v1480345800/Niemiecki_czasy_"+this.value+".jpg' style='border-radius: 8px;' class='img-responsive' /><div class='caption'><h4>German Notes Image "+this.value+"</h4></div><br/>");
    $("#calloutContainer").append('<button type="button" class="btn btn-default btn-block btn-outline btnShow" data-toggle="collapse" data-target="#germanNote'+this.value+'">German Notes Image '+this.value+' - SHOW / HIDE</button>');
  });
});
