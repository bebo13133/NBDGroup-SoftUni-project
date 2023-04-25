var menuBox = document.getElementById('menuBox')
var icon = document.getElementById("menuIcon")

icon.onclick = function(){
    menuBox.classList.toggle('openMenu');
   (menuBox.classList.contains ("openMenu")) ? icon.src="./media/close.png"
   : icon.src="./media/menu.png";
      
}