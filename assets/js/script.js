let cssFile = document.querySelector(".stylesheet");
let green = document.querySelector(".theme1");
let red = document.querySelector(".theme2");
let violet = document.querySelector(".theme3");

red.addEventListener("click", () => {
    console.log(cssFile);
    console.dir(cssFile);
    cssFile.removeAttribute("href", "");
    cssFile.setAttribute("href", "./assets/css/red.css");
    cssFile.cssText = "transition: 0.3s";
})

violet.addEventListener("click", () => {
    console.log(cssFile);
    console.dir(cssFile);
    cssFile.removeAttribute("href", "");
    cssFile.setAttribute("href", "./assets/css/violet.css");
    cssFile.cssText = "transition: 0.3s";
})

green.addEventListener("click", () => {
    console.log(cssFile);
    console.dir(cssFile);
    cssFile.removeAttribute("href", "");
    cssFile.setAttribute("href", "./assets/css/style.css");
    cssFile.cssText = "transition: 0.3s";
})