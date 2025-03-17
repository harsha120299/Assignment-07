console.log("Case-02.js is loading....");

$(document).ready(function () {
    let boxes = $(".box");
    let currentIndex = 0;
    const colors = ["blue", "red", "pink", "green", "yellow", "violet"];

    function changeColor() {
        boxes.css("background-color", "white");

        for (let i = 0; i < colors.length; i++) {
            let index = (currentIndex + i) % boxes.length;
            boxes.eq(index).css("background-color", colors[i]);
        }

        currentIndex = (currentIndex + 1) % boxes.length;
    }

    setInterval(changeColor, 1000);
});
