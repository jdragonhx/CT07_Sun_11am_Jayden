let balls;

function setup() {
    createCanvas(600, 400);
}
function draw() {
    background(150);
    if(mouse.presses()) {
        balls = new Sprite(mouse.x,mouse.y,30);
        fill(random(0, 255),random(0, 255),random(0, 255));
        balls = "dynamic";
        world.gravity.y = 5
    }

}