  console.log("ready and connected");

  let turncount = 0;
  let gamenotover = true;


  // wait for the DOM to finish loading
  $(document).ready(function() {
    // all code to manipulate the DOM
    // goes inside this function


    $('.box').on('click', function() {
      if (gamenotover) {
        if ($(this).text() == '') {
          if (turncount % 2 == 0) {
            $(this).text('x');
            turncount ++;
            $('.turn').text('o');
          } else{
            $(this).text('o');
            turncount ++;
            $('.turn').text('x');
          };
        };
        if (winner() != false) {
          let theWinner = winner();
          $('.announce-winner').text(`The ${theWinner}'s win!`);
          gamenotover = false;
        } else if (turncount >= 9) {
          $('.announce-winner').text("It's a draw");
          gamenotover = false;
        }
      }
    });

    $('.reset').on('click', function() {
      location.reload();
    });





  });



      let winner = function () {
          // win conditions
          // top line
          if ($('.box').eq(0).text() == "x" && $('.box').eq(1).text() == "x" && $('.box').eq(2).text() == "x") {
            return "x";
        } else if ($('.box').eq(0).text() == "o" && $('.box').eq(1).text() == "o" && $('.box').eq(2).text() == "o") {
            return "o";

          //middle line
        } else if ($('.box').eq(3).text() == "x" && $('.box').eq(4).text() == "x" && $('.box').eq(5).text() == "x") {
            return "x";
        } else if ($('.box').eq(3).text() == "o" && $('.box').eq(4).text() == "o" && $('.box').eq(5).text() == "o") {
            return "o";

          //last line
        } else if ($('.box').eq(6).text() == "x" && $('.box').eq(7).text() == "x" && $('.box').eq(8).text() == "x") {
            return "x";
        } else if ($('.box').eq(6).text() == "o" && $('.box').eq(7).text() == "o" && $('.box').eq(8).text() == "o") {
            return "o";

          //diagnal 1
        } else if ($('.box').eq(0).text() == "x" && $('.box').eq(4).text() == "x" && $('.box').eq(8).text() == "x") {
            return "x";
        } else if ($('.box').eq(0).text() == "o" && $('.box').eq(4).text() == "o" && $('.box').eq(8).text() == "o") {
            return "o";


          //diagnal 2
        } else if ($('.box').eq(2).text() == "x" && $('.box').eq(4).text() == "x" && $('.box').eq(6).text() == "x") {
            return "x";
        } else if ($('.box').eq(2).text() == "o" && $('.box').eq(4).text() == "o" && $('.box').eq(6).text() == "o") {
            return "o";

          //column 1
        } else if ($('.box').eq(0).text() == "x" && $('.box').eq(3).text() == "x" && $('.box').eq(6).text() == "x") {
            return "x";
        } else if ($('.box').eq(0).text() == "o" && $('.box').eq(3).text() == "o" && $('.box').eq(6).text() == "o") {
            return "o";
            //column 2
        } else if ($('.box').eq(1).text() == "x" && $('.box').eq(4).text() == "x" && $('.box').eq(7).text() == "x") {
            return "x";
        } else if ($('.box').eq(1).text() == "o" && $('.box').eq(4).text() == "o" && $('.box').eq(7).text() == "o") {
            return "o";
            //column 3
        } else if ($('.box').eq(2).text() == "x" && $('.box').eq(5).text() == "x" && $('.box').eq(8).text() == "x") {
            return "x";
        } else if ($('.box').eq(2).text() == "o" && $('.box').eq(5).text() == "o" && $('.box').eq(8).text() == "o") {
            return "o";

            //no one has won
        } else {
          return false;
        }
      };
