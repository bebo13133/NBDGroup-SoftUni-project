var menuBox = document.getElementById('menuBox')
var icon = document.getElementById("menuIcon")

icon.onclick = () => {
    let x = document.querySelector('.drop-menu')
    menuBox.classList.toggle('openMenu');
   if (menuBox.classList.contains("openMenu")) {
    x.style.display = "block"
    icon.src = "./media/close.png"
   } else{ 
    icon.src = "./media/menu.png";
    x.style.display = "none"
   }
        

}
var menuElements = document.querySelectorAll("ul li a");
menuElements.forEach((elements) => {
    elements.addEventListener("click", () => {
        document.querySelector("li a.active").classList.remove("active");
        elements.classList.add("active");
    });
});
// var icon = document.getElementById("menuIcon")


// icon.forEach((elements) => {
//     elements.addEventListener("click",()=>{
//         let menu = document.getElementsByClassName("drop-menu")
//         if(menu.style.display === "none"){
//             menu.style.display = "block"
//         }else{
//             menu.style.display="none"
//         }
//     })
// })
