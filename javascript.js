
// window.onload = 


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
    document.querySelector("#cookies_btn").addEventListener('click', () => {
        wrapText.classList.remove("show");

        setCookie("cookie", true, 15);
    });
    window.addEventListener("load", executedCode);
};



// 