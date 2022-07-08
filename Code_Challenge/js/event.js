const windowWidth = window.innerWidth;
const body = document.querySelector("body");

console.log(windowWidth);

let resizeClass = "";

function windowResize() {
    if (windowWidth < 650) {
        resizeClass = "colorBlue";
        body.classList.add(resizeClass);
    } else if (windowWidth >= 650 && windowWidth < 850) {
    resizeClass = "colorYellow";
    body.classList.add(resizeClass);
    } else if (windowWidth >= 850) {
        resizeClass = "colorGreen";
        body.classList.add(resizeClass);
    }
}

body.addEventListener("resize", windowResize());