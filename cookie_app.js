newFunction();

function newFunction() {
    const wrapText = document.querySelector("#cookies");
    document.querySelector("#cookies_btn");
    executedCode = () => {
        if (document.cookie.includes("cookie"))
            return;
        wrapText.classList.add("show");

    };
    window.addEventListener("load", executedCode);

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
}
