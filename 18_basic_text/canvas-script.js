window.onload = function () {
  let canvas = document.getElementById("basic-texts-canvas");
  let context = canvas.getContext("2d");

  context.font = "45px Verdana";

  let fText = "Fill Text on Canvas";  
  context.fillText(fText, 80, 100);

  let setText = "Stroke Text on Canvas";

  context.strokeText(setText, 80, 200);
}