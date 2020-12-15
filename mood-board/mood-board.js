let count = 0;
let cap = 11;

function addNote() {
  if (count == cap) {
    return;
  }
  var n = $.parseHTML("<div class='stickynote'><textarea rows='4' cols='27'></textarea></div>");
  
  var board = 
    document.getElementsByClassName("board")[0];
  
  count++;
  $(n).appendTo(board);
}



