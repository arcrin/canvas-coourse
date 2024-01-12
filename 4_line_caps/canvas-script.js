window.onload = function () {
  let canvas = document.getElementById("line-caps-canvas");
  let context = canvas.getContext("2d");

  // First Line
  context.beginPath();
  context.lineCap = "butt";
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.stroke();

  // Second Line
  context.beginPath();
  context.lineCap = "round";
  context.strokeStyle = "blue";
  context.lineWidth = 10;
  context.moveTo(100, 125);
  context.lineTo(300, 125);
  context.stroke();

  // Third Line
  context.beginPath();
  context.lineCap = "square";
  context.strokeStyle = "green";
  context.lineWidth = 10;
  context.moveTo(100, 150);
  context.lineTo(300, 150);
  context.stroke();
}