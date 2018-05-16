//CLOSE MOBILE MENU
var nav = document.querySelector(".mobile-nav");
var checkbox = document.querySelector(".mobile-nav__checkbox");
var items = document.querySelectorAll(".mobile-nav__item");

items.forEach(function(item){
    item.addEventListener("click", function(){
        checkbox.checked = false;
    });
});