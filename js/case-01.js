console.log("Case-01.js is loading....");

$(document).ready(function () {
  function moveLetters() {
    let spans = $(".container_inside span");
    let lastLetter = spans.last().text();

    for (let i = spans.length - 1; i > 0; i--) {
      spans.eq(i).text(spans.eq(i - 1).text());
    }

    spans.eq(0).text(lastLetter);
  }

  setInterval(moveLetters, 1000);
});