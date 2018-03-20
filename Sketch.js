var pad_one, pad_two;


function setup() {
    createCanvas(800,600);
    pad_one =0;
    pad_two = 0;
  }

function draw() {
    background(25);

    rect(pad_one.x, pad_one.y, 10, 100);
    rect(pad_two.x, pad_two.y, 10, 100);
  }