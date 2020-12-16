let count = 0;
let cap = 11;

function addNote(button) {
  if (count == cap) {
    return;
  }
  let colour = button.id;

  if (colour == "pink") {
    colour = "#f0cdcd";
  }
  else if (colour == "blue") {
    colour = "#c9dee6";
  }
  else {
    colour = "#f3d9c4";
  }

  var n = $.parseHTML("<div class='stickynote'" + " style='background-color:" + colour + ";'><textarea rows='4' cols='27'></textarea></div>");
  
  var board = 
    document.getElementsByClassName("board")[0];
  
  count++;
  $(n).appendTo(board);
}

function saveNote() {
  localStorage.setItem(count, {})
}

$(document).ready(function() {
  var board = document.getElementsByClassName("board")[0];
  console.log(localStorage.getItem(0));
  if (localStorage.getItem(0) != null) {
    let c = 0;
    var note;
    while (localStorage.getItem(c) != null) {
      note = localStorage.getItem(c);
      console.log(note);
      c++;
    }
  }
});



