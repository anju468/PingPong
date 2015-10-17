$(document).ready(function() {
  $(".pingpongOutput").hide();
  $("#play").click(function(event) {
    $(".pingpongOutput ul").empty();
    var userInput = parseInt(prompt("How many numbers do you want to Ping-Pong?"));
    for (var i=1; i<=userInput; i++) {
      if ((i%3)===0 && (i%5)===0) {
        $(".pingpongOutput ul").append("<li>Ping Pong</li>");
      } else if ((i%3)===0 && (i%5)!==0) {
          $(".pingpongOutput ul").append("<li>Ping</li>");
        } else if ((i%3)!==0 && (i%5)===0) {
            $(".pingpongOutput ul").append("<li>Pong</li>");
          } else {
              $(".pingpongOutput ul").append("<li>" + (i) + "</li>");
            }
    }
    $(".pingpongOutput").show();
    event.preventDefault();
  });
});
