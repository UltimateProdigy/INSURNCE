const toggle = document.querySelector(".togglebutton");

toggle.addEventListener("click", show);
function show(){
    var dropdownMenu = document.querySelector(".dropdown-menu")
    if (dropdownMenu.style.display === 'none') {
         dropdownMenu.style.display = 'block';
    }
    else {dropdownMenu.style.display = 'none';}
}

