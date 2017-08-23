console.log("ready and connected");

let xturn = true;
// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function


  $('.box').on('click', function() {
    if ($(this).text() == '') {
      if (xturn) {
        $(this).text('x');
        xturn = false;
      } else{
        $(this).text('o');
        xturn = true;
      };
    };

  });

  $('.reset').on('click', function() {
    location.reload();
  });




});
