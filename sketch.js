var time = 0;

function circ_x(time){
    var x = windowWidth/2 - (windowWidth/2.5)*Math.cos(time);
    return x;
}

function circ_y(time){
    var y = windowHeight/2 + (windowHeight/6)*Math.cos(time);
    return y;
}

function preload() {
    font = loadFont('Cube.ttf');
}  

function setup() {    
    createCanvas(windowWidth, windowHeight);
    textFont(font);
    textSize(windowWidth/26);
    textAlign(CENTER, CENTER);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255, 20, 140);
    
    if (Math.sin(time) >= 0) {
        fill(0, 0, 0);
        noStroke();
        text('JOIN THE ORBIT', windowWidth/2, windowHeight/2);
        fill(0, 225, 225);
        circle(circ_x(time), circ_y(time), windowWidth/45);
        time = time + 0.015;
    }

    else {      
        noStroke(); 
        fill(0, 225, 225);
        circle(circ_x(time), circ_y(time), windowWidth/45);
        fill(0, 0, 0);
        text('JOIN THE ORBIT', windowWidth/2, windowHeight/2);
        time = time + 0.018;
    }

    
}

function mousePressed(){
		background(120, 20, 80);

}
