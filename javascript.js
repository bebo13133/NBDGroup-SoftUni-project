
window.onload = function () {
    var menuBox = document.getElementById('menuBox')
    var icon = document.getElementById("menuIcon")

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

setCookie = (userName, userValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = userName + "=" + userValue + ";" + expires + "; path=/";
}

getCookie = (userName) => {
    let name = userName + "=";
    let usersInfo = decodeURIComponent(document.cookie);
    let userArr = usersInfo.split("; ");
    let value;
    userArr.forEach(val => { if (val.indexOf(name) === 0) value = val.substring(name.length) })
    return value;
}

document.querySelector("#cookies_btn").addEventListener('click', () => {
    document.querySelector("#cookies").style.display = 'none';
    setCookie("cookie", true, 15);

})
cMessage = () => {
    if (!getCookie("cookie")) document.querySelector("#cookies").style.display = "block"

};
window.addEventListener("load", cMessage);