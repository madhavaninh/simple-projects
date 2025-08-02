const hanburger=document.querySelector(".hanburger");
const navmenu=document.querySelector(".nav-links");
hanburger.addEventListener("click",()=>{
    hanburger.classList.toggle("active");
    navmenu.classList.toggle("active");

});