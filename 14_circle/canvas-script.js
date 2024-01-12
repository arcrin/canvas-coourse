window.onload = function () {
  let canvas = document.getElementById("circular-objects-canvas");
  let context = canvas.getContext("2d");

  let radian = Math.PI / 180;

  context.beginPath();
  context.strokeStyle = "orange";
  context.lineWidth = 15;
  context.fillStyle = "orange";
  context.arc(450, 300, 150, 0 * radian, 360 * radian, false);
  context.stroke();
  context.fill();
};
