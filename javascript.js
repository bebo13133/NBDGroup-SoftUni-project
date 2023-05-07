
// window.onload = 

var selectorElement = selector =>{
    var element= document.querySelector(selector)
    if(element) return element;
    throw new Error(`Wrong ${selector}. Choiss another`); 
};
window.addEventListener('keyup', event =>{
    if(event.key==="Escape") searchForm.classList.remove('activated')
})
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

};

var searchOpenBtn = selectorElement('#search-icon');

var searchCloseBtn = selectorElement('#form-close-btn');
var searchForm = selectorElement('#search-form-container');

searchOpenBtn.addEventListener('click', ()=>
       searchForm.classList.add('activated'));
searchCloseBtn.addEventListener('click', ()=>  
       searchForm.classList.remove('activated'));

 window.onload=function searching(){
const bodyElement= document.body;
const themeToggleBtn = selectorElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme')

if(currentTheme) {
    bodyElement.classList.add('light-theme')

};
themeToggleBtn.addEventListener("click", ()=>{
    bodyElement.classList.toggle('light-theme')
 
    if(bodyElement.classList.contains('light-theme')){
   localStorage.setItem('currentTheme','themeActive')

 
    }else{
         localStorage.removeItem('currentTheme')
       
    }
  
});
};





lazyFunction();
function lazyFunction() {
const imgElements = document.querySelectorAll("img[data-src]");

const lazyLoadingImage = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", () => {
      entry.target.classList.remove("lazy-img");
      observer.unobserve(entry.target);
    });
    console.log("Called");
  });
};
const lazyLoadingObserver = new IntersectionObserver(lazyLoadingImage, {
  threshold: 0.9,
});
imgElements.forEach((img) => lazyLoadingObserver.observe(img));


};












var menuElements = document.querySelectorAll("ul li a");
menuElements.forEach((elements) => {
    elements.addEventListener("click", () => {
        document.querySelector("li a.active").classList.remove("active");
        elements.classList.add("active");
    });
});
// /============== COOKIESE==========================/
newFunction();

function newFunction() {
    const wrapText = document.querySelector("#cookies");
    document.querySelector("#cookies_btn");
    executedCode = () => {
        if (document.cookie.includes("cookie"))
            return;
        wrapText.classList.add("show");

    };
 
    setCookie = (userName, userValue, expDays) => {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = userName + "=" + userValue + ";" + expires + "; path=/";
    };
    getCookie = (userName) => {
        let nameInfo = userName + "=";
        let usersInfo = decodeURIComponent(document.cookie);
        let userArr = usersInfo.split("; ");
        let value;
        userArr.forEach(val => {
            if (val.indexOf(nameInfo) === 0)
                value = val.substring(name.length);
        });
        return value;
    };
    let cookieElementor = document.querySelector("#cookies_btn")
    if(cookieElementor)
    cookieElementor.addEventListener('click', () => {
        wrapText.classList.remove("show");

        setCookie("cookie", true, 15);
    });
    window.addEventListener("load", executedCode);
};



// 