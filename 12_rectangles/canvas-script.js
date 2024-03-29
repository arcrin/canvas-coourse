window.onload = function () {
  let canvas = document.getElementById("rectangle-canvas");
  let context = canvas.getContext("2d");

  context.strokeStyle = "red";
  context.lineWidth = 11;
  context.lineJoin = "miter";
  context.fillStyle = "blue";
  context.rect(50, 200, 200, 200);
  context.stroke();
  context.fill();

  context.fillStyle = "green";
  context.fillRect(300, 200, 200, 200);

  context.lineWidth = 3;
  context.strokeStyle = "blue";
  context.lineJoin = "square";
  context.strokeRect(550, 200, 200, 200);

  context.clearRect(0, 0, 900, 600);
};
