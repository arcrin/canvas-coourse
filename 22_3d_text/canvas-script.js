window.onload = function () {
  // Definitions
  let canvas = document.getElementById("three-d-text-canvas");
  let context = canvas.getContext("2d");

  draw3DText(
    "This text will be in 3D",
    100,
    300,
    "normal 600 54px monospace",
    "red",
    2
  );

  function draw3DText(text, x, y, style, color, size) {
    context.font = style;
    context.fillStyle = "black";

    // for (let i = 0; i < size; i++) {
    //   context.fillText(text, x - i, y - i);
    // }

    context.fillText(text, 100, 300)
    context.fillText(text, 99, 299)
    context.fillText(text, 98, 298)
    context.fillText(text, 97, 297)
    context.fillText(text, 96, 296)
    context.fillText(text, 95, 295)

    context.fillStyle = color;
    context.fillText(text, x, y);
  }
};
