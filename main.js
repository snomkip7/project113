function preload(){
    img = loadImage('https://live.staticflickr.com/2726/4393573316_7fa6e81d26_b.jpg')
}

function setup(){
    canvas = createCanvas(1250, 1000);
    canvas.position(110, 250);
    
}

function draw(){
    image(img, 300, 300, 640, 480);
    //rect
    stroke(250, 200, 70);
    fill(250, 200, 70);
    rect(175, 175, 50, 700);
    rect(175, 175, 800, 50);
    rect(975, 175, 50, 700);
    rect(175, 875, 800, 50);
    //elip
    stroke(200, 70, 250);
    fill(250, 70, 250);
    ellipse(200, 550, 100, 300);
    ellipse(1000, 550, 100, 300);
    ellipse(600, 200, 300, 100);
    ellipse(600, 900, 300, 100);
    //circle
    stroke(70, 250, 200);
    fill(70, 250, 200);
    circle(200, 200, 100);
    circle(1000, 200, 100);
    circle(200, 900, 100);
    circle(1000, 900, 100);
}
