const menuButton = document.querySelector(".hamburgerButton");
//const app = document.querySelector("body");
const menu=document.querySelector(".mobileMenu");
const closeButton=document.querySelector(".closeButton");
menuButton.addEventListener("click", showMenu);
closeButton.addEventListener("click",hideMenu);

console.log("in JS");
function showMenu(){
    menu.setAttribute("class","mobileMenuActive");
    menu.style.display="inline";
}

function hideMenu(){
    menu.removeAttribute("class","mobileMenuActive");
    menu.style.display="none";
}