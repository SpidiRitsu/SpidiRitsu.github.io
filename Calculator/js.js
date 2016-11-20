var sum=0;
var lastVal;
var mathTime;

$(document).ready(function() {
  $(".btn").click(function() {
    var val=$(this).val();
    console.log(val);
    var history=$("#history > p").text();
    if(history=='0' || history=="Out of range!") {
      if(val=='0')
        return;
      history='';
    }
    if(history.length>=10) {
      $("#input > p").text(0);
      $("#history > p").text("Out of range!");
      return;
    }
    if(val=="C") {
      val='0';
      history='';
    }
    if(val=="=") {
      var regex=/([+\-/*])/;
      var arr=history.split(regex);
      var calculation;
      console.log(arr);
      if(arr[arr.length-1]==='') {
        arr.splice(arr.length-2, 2);
        history=arr.join('');
      }
      console.log(arr);
      while(arr.length!==1) {
        // while(arr.length<=1) {
        var found=history.search(regex);
        // console.log("FOUND AT: "+found);
        var foo=arr.splice(arr[found]-1,3);
        switch(foo[1]) {
          case "/": calculation=parseFloat(foo[0])/parseFloat(foo[2]); break;
          case "*": calculation=parseFloat(foo[0])*parseFloat(foo[2]); break;
          case "-": calculation=parseFloat(foo[0])-parseFloat(foo[2]); break;
          case "+": calculation=parseFloat(foo[0])+parseFloat(foo[2]); break;
        }
        arr.unshift(calculation.toFixed(2));
        console.log(calculation+"="+parseFloat(foo[0])+" "+parseFloat(foo[2]));
      }
        // console.log(foo, calculation);
        // arr.unshift(calculation);
        history+="=";
        val=calculation.toFixed(2);
        var valArr=val.split('.');
        if(valArr[1]=="00")
          val=calculation.toFixed(0);

//DODAC RANDOMIZER KOLOROW!!!!

//I ZAPYTAC SIE KOWALCZYKA CO MA JUTRO (DZISIAJ CZYLI CZWARTEK) NA 7 GODZINIE BO MASZ PRZECIEZ OKIENKO XD
//CODING IS LOVE CODING I LIFE, a nie chce stracic calej godziny na siedzenie i nic nie robienie Kappa

      // }
    }
    $("#input > p").text(val);
    $("#history > p").text(history+val);
    console.log("HISTORY: "+history+val);
  });
  $(".btn").click(function(event) {
    // Removes focus of the button.
    $(this).blur();
  }); //sprawia ze nie ma aktywnego przycisku po kliknieciu
});
