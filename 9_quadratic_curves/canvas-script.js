window.onload = function () {
  let canvas = document.getElementById("quadratic-curves-canvas");
  let context = canvas.getContext("2d");

  context.beginPath();  
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(200,250);
  context.quadraticCurveTo(200,0,400,250);
  context.stroke();
}