window.onload = function () {
  // Definitions
  var canvas = document.getElementById("bezier-curves-canvas");
  var context = canvas.getContext("2d");

  // context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);

  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(0, 0);
  context.bezierCurveTo(200, 10, 50, 150, 600, 0);
  context.stroke();
};
