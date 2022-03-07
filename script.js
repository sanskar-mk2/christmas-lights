const divarr = new Array(10);

const divs = () => {
    for (let i = 0; i < 10; i++) {
        let elem = document.createElement("div");
        elem.classList.add("circles");
        divarr[i] = elem;
        document.getElementById("main-div").appendChild(elem);
    }
}

const color1 = (el) => {
    root = document.querySelector(":root");
    root.style.setProperty("--first", el.value);
}
const color2 = (el) => {
    root = document.querySelector(":root");
    root.style.setProperty("--second", el.value);
}

const play = () => {
    root = document.querySelector(":root");
    root.style.setProperty("--anim", "color_change");
}

const pause = () => {
    root = document.querySelector(":root");
    root.style.setProperty("--anim", "none");
}

const timer = (el) => {
    if (el.value > 3)
        el.value = 3;
    root = document.querySelector(":root");
    root.style.setProperty("--time", el.value + "s");
}