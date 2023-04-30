
window.onload = function () {
    let menuBox = document.getElementById('menuBox')
    let icon = document.getElementById("menuIcon")

    icon.onclick = () => {
        let x = document.querySelector('.drop-menu')
        menuBox.classList.toggle('openMenu');
        if (menuBox.classList.contains("openMenu")) {
            x.style.display = "block"
            icon.src = "./media/close.png"
        } else {
            icon.src = "./media/menu.png";
            x.style.display = "none"
        }

    }

}
var menuElements = document.querySelectorAll("ul li a");
menuElements.forEach((elements) => {
    elements.addEventListener("click", () => {
        document.querySelector("li a.active").classList.remove("active");
        elements.classList.add("active");
    });
});
// /============== COOKIESE==========================/



// cMessage = () => {
//     if (getCookie("cookie")) document.querySelector("#cookies").style.display = "block"

// };
// window.addEventListener("load", cMessage);
