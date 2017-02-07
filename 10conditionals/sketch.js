var x = 0;
var dia = 50;
var speed = 3;

function setup() {
  createCanvas(600, 400)
}

function draw() {
  background(0);
  var rt = width - (dia/2);
  var lt = 0 + (dia/2);


  stroke(255);
  strokeWeight(4);
  noFill();
  line(width/2, 0, width/2, height);

//   if (mouseX > 400) {
//     ellipse(x, 200, dia, dia);
// } else if (mouseX > 200) {
//     rect(x, 200, dia, dia)
// }
  ellipse(x, 200, dia, dia);
  x = x + speed;
  if (x > width - dia/2) {
    speed = speed*-1;
  } else if (x < 0 + dia/2) {
    speed = 3;
  }
}
