const divarr = new Array(10);

const divs = () => {
    for (let i = 0; i < 10; i++) {
        let elem = document.createElement("div");
        elem.classList.add("circles");
        divarr[i] = elem;
        document.getElementById("main-div").appendChild(elem);
    }
}