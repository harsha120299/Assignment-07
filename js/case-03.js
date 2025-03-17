$(document).ready(function () {
    let boxes = $(".box");
    let index = 0;
    let direction = 1;
    let redShades = ["#ff0000", "#cc0000", "#990000", "#660000", "#330000"];

    function knightRiderEffect() {
      boxes.css({ "background-color": "white", "opacity": "0.2" });

      for (let i = 0; i < redShades.length; i++) {
        let trailIndex = index - i * direction;
        if (trailIndex >= 0 && trailIndex < boxes.length) {
          boxes.eq(trailIndex).css({ "background-color": redShades[i], "opacity": 1 - i * 0.15 });
        }
      }

      index += direction;

      if (index === boxes.length - 1 || index === 0) {
        direction *= -1;
      }
    }

    setInterval(knightRiderEffect, 120);
  });