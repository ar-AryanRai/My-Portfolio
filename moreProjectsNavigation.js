const prodLinks = document.querySelectorAll(
  ".calculator, .to-do-app, .drumstick, .css-variable, .clock, .game, .carousel, .mouse, .color-flipper, .bmi-calc, .landing-page, .api"
);

console.log(prodLinks);

function navigateTo2(path) {
  console.log(path);
  window.open(path, "_blank");
}

prodLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    let targetClass = event.target.classList;

    if (targetClass.contains("calculator")) navigateTo2("https://ar-aryanrai.github.io/Calculator/");
    else if (targetClass.contains("to-do-app")) navigateTo2("https://ar-aryanrai.github.io/ToDo-App/");
    else if (targetClass.contains("drumstick")) navigateTo2("https://ar-aryanrai.github.io/Drum-Stick/");
    else if (targetClass.contains("css-variable")) navigateTo2("https://ar-aryanrai.github.io/CSS-Variable/");
    else if (targetClass.contains("clock")) navigateTo2("https://ar-aryanrai.github.io/Clock/");
    else if (targetClass.contains("game")) navigateTo2("https://github.com/ar-AryanRai/Bug-Bash");
    else if (targetClass.contains("carousel")) navigateTo2("https://ar-aryanrai.github.io/Slider/");
    else if (targetClass.contains("mouse")) navigateTo2("https://ar-aryanrai.github.io/Mouse-Over-Shadow/");
    else if (targetClass.contains("color-flipper")) navigateTo2("https://ar-aryanrai.github.io/Color-Flipper/");
    else if (targetClass.contains("bmi-calc")) navigateTo2("https://github.com/ar-AryanRai/bmi-Calculator-React");
    else if (targetClass.contains("landing-page")) navigateTo2("https://ar-aryanrai.github.io/Landing-page/");
    else if (targetClass.contains("api")) navigateTo2("https://github.com/ar-AryanRai/API-Fetch");
  });
});