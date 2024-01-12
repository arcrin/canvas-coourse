window.onload = function () {
  let canvas = document.getElementById("chessboard-canvas");
  let context = canvas.getContext("2d");

  let lightCellColor = "#ddb180";
  let darkCellColor = "#7c330c";

  context.strokeStyle = "black";
  context.strokeRect(250, 100, 400, 400);

  for(let x = 1; x <= 8; x++) {
    for(let y = 1; y <= 8; y++) {
      if((x + y) % 2 == 0) {
        context.fillStyle = darkCellColor;
      } else {
        context.fillStyle = lightCellColor;
      }
      context.fillRect(200 + x * 50, 50 + y * 50, 50, 50)
    }
  }
  // context.fillStyle = darkCellColor;
  // context.fillRect(200 + 1 * 50, 50 + 1 * 50, 50, 50)
  // context.fillStyle = lightCellColor;
  // context.fillRect(200 + 1 * 50, 50 + 2 * 50, 50, 50)
  // context.fillStyle = darkCellColor;
  // context.fillRect(200 + 1 * 50, 50 + 3 * 50, 50, 50)
  // context.fillStyle = lightCellColor;
  // context.fillRect(200 + 1 * 50, 50 + 4 * 50, 50, 50)
}