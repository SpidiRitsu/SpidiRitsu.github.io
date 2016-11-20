var game = {
  winCombos: [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [7,4,1],
    [8,5,2],
    [9,6,3],
    [7,5,3],
    [9,5,1]
  ],
  settings: {
    players: 0,
    player1Character: "X",
    player2Character: "O"
  },
  turn: 1,
  gameFinished: false
};

function playAI() {
  if(game.settings.players==1 && game.turn==1) {
    var arr=[];
    for(var i=1; i<=9; i++) {
      if($("#b"+i).html()==="")
        arr.push(i);
    }
    //wzor na rand: Math.floor(Math.random() * (max - min + 1)) + min
    var rand=Math.floor(Math.random()*(arr.length-1-0+1))+0;
    $("#b"+arr[rand]).html(game.settings.player2Character);
    checkIfWin(game.settings.player2Character);

  }
}

function whoPlay() {
  if(game.settings.players==2) {
    if(game.turn==1) {
      game.turn=2;
      $("#playerNow").html("Player "+game.settings.player2Character);
      return game.settings.player1Character;
    }
    else if(game.turn==2) {
      game.turn=1;
      $("#playerNow").html("Player "+game.settings.player1Character);
      return game.settings.player2Character;
    }
  }
  else if(game.settings.players==1) {
      $("#playerNow").html("Player "+game.settings.player1Character);
      return game.settings.player1Character;
  }
}

function restartGame() {
  $(".b").html("");
  $(".b").css("background-color", "inherit");
  game.gameFinished=false;
  game.turn=1;
  $("#playerNow").html("Player "+game.settings.player1Character);
}

function checkIfWin(character) {
  game.winCombos.forEach(function(event) {
    var input = [$("#b"+event[0]),$("#b"+event[1]),$("#b"+event[2])];
    if(input[0].html()==character && input[1].html()==character && input[2].html()==character) {
      game.gameFinished=true;
      $("#playerNow").html("Player "+character+" won!");
      input.forEach(function(event) {
        $(event).css("background-color","green");
      });
    }
  });
}

function swapCharacters() {
  var foo;
  foo=$("#player1Character").html();
  console.log(foo);
  $("#player1Character").html($("#player2Character").html());
  $("#player2Character").html(foo);
  game.settings.player1Character=$("#player1Character").html();
  game.settings.player2Character=$("#player2Character").html();
  $("#playerNow").html("Player "+game.settings.player1Character);
}
$(document).ready(function() {
  //modal-start
  $("#settingsModal").modal("show");
  $("#settingsModal input").on("change",function() {
    game.settings[$(this).prop("name")]=$(this).val();
    console.log(game.settings[$(this).prop("name")]);
    /*if($("#character1X:checked")) {
      $("#character2X").prop("checked",false);
      setTimeout(function(){$("#character2O").prop("checked",true);},1);
    }
    else if($("#character1O:checked")) {
      $("#character2O").prop("checked",false);
      setTimeout(function(){$("#character2X").prop("checked",true);},1);
    }*/

  });
  //modal-end
  $(".btn").click(function() {
    $(this).blur();
  });
  $("td").click(function() {
    if(!game.gameFinished) {
      if($(this).html()==="") {
        var characterNow=whoPlay();
        $(this).html(characterNow);
        checkIfWin(characterNow);
        if(!game.gameFinished)
          playAI();
      }
    }
    // console.log(game.settings.player1Character);
  });
  $("#restartBtn").click(function() {
    restartGame();
  });
  $("#settingsBtn").click(function() {
    $("#settingsModal").modal({backdrop: false});
  });
});
