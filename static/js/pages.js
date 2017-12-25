//Highlight current page in navbar.
var page = $(location).attr('pathname');

switch(page){
    case "/bio/":
    $("li:has(a[href$='bio'])").addClass("currentPage");
    break;
    case "/projects/":
    $("li:has(a[href$='projects'])").addClass("currentPage");
    break;
    case "/resume/":
    $("li:has(a[href$='resume'])").addClass("currentPage");
    break;
    case "/contact/":
    $("li:has(a[href$='contact'])").addClass("currentPage");
    break;
}
