

function openTab(tabname) {
    var linnks = document.getElementsByClassName("active")
    var contents = document.getElementsByClassName("education-content")
    for (let link of linnks) {
        link.classList.remove("active")
    }
    for (let content of contents) {
        content.classList.remove("active-content")
    };
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-content")
};

function closeMenu() {
    let menuSide = document.getElementById("burgerMenu")
    menuSide.style.right = "-318px"

}

function openMenu() {
    let menuSide = document.getElementById("burgerMenu")
    menuSide.style.right = "0"

}



var iconMode = document.getElementById("sunIcon");
var logo = document.getElementById('logo-dark')
iconMode.onclick =  ()=>{
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")) {
         sunIcon.src = "/about-borislav/images/moon-6689.png"
          logo.src = "/about-borislav/images/logo-light.png"
    }else{ 
        sunIcon.src = "/about-borislav/images/sun-8728.png"
     logo.src = "./images/logo-dark.png"
    }
}


