
let r1;
let r2;

function setup() {
    createCanvas(1048, 720);
    background(1);
    
    let r1_pos = createVector(40, 30);
    let r2_pos = createVector(40, 200);
    let r1_scale = createVector(120, 30);
    let r2_scale = createVector(120, 30);
    r1 = new Rect(r1_pos, r1_scale);
    r2 = new Rect(r2_pos, r2_scale);
}

function draw() {
  // put drawing code here
    r1.draw();
    r2.draw();
}