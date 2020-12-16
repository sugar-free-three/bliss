// adds a new comment where text is the comment and cNum is which numbered comment it is
function addComment(cNum){
    var text = document.getElementsByClassName("user-request-text")[cNum].value;
    var userText= '<div class="media"><img class="mr-1" src="https://www.flaticon.com/svg/static/icons/svg/763/763713.svg" alt="icon" height="50" width="50"><div class="media-body col-sm-auto"><h6 class="mt-0">You</h6><p>'
    userText+= text;
    userText+='</p></div>';

    var comment = $.parseHTML(userText);
    var section = document.getElementsByClassName("user-comment")[cNum];
    $(comment).appendTo(section);

    // possible todo: clear the input box to be clean
}
