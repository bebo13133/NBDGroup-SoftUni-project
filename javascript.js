var menuBox = document.getElementById('menuBox')
var icon = document.getElementById("menuIcon")

icon.onclick = ()=>{
    menuBox.classList.toggle('openMenu');
   (menuBox.classList.contains ("openMenu")) ? icon.src="./media/close.png"
   : icon.src="./media/menu.png";
      
}
// const menuElements = document.querySelectorAll("ul li a");
// menuElements.forEach((elements) => {
//     elements.addEventListener("click", () => {
//         document.querySelector("li a.active").classList.remove("active");
//         elements.classList.add("active");
//     });
// });