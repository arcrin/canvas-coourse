window.onload = function () {
  let canvas = document.getElementById("polygon-canvas");
  let context = canvas.getContext("2d");

  let sides = 7;
  let radius = 100;
  let centerX = 200;
  let centerY = 400;
  let startAngle = 200;
  let angle = (2 * Math.PI) / sides;  

  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 5;
  context.lineJoin = "round";

  let beginX = centerX + radius * Math.cos(startAngle);
  let beginY = centerY - radius * Math.sin(startAngle);

  context.moveTo(beginX, beginY);

  for (let i = 1; i <= sides; i++) {
        // Current point'S coordinates
        var currentAngle = startAngle + i * angle;
        var currentPointX = centerX + radius * Math.cos(currentAngle);
        var currentPointY = centerY - radius * Math.sin(currentAngle);
    
        // Draw the line
        context.lineTo(currentPointX, currentPointY);
        context.stroke();
  }
  context.closePath();
  // context.stroke();
}