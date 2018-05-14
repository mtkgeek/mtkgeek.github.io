$(document).ready(function() {
    $("h1>span").addClass("animated slideInLeft");
    $("h1>b").addClass("animate slideInRight");
});

var button = document.getElementsByClassName('button');
var menu = document.getElementsByClassName('head-menu');

function stack(event){
    menu.classList.toggle('nav-stacked');
}

button.addEventListener("click", stack);