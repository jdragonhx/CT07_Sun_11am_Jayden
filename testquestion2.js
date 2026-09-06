let balls;
let floor;

function setup() {
    createCanvas(600, 400);
    floor = new Sprite(300, 400, 600, 20);
    floor.collider = "static";
}

function draw() {
    background(150);
    if(mouse.presses()) {
        balls = new Sprite(mouse.x,mouse.y,30);
        fill(random(0, 255),random(0, 255),random(0, 255));
        balls.collider = "dynamic";
        world.gravity.y = 5;
        balls.bounciness = 0.5;
        
    }

}