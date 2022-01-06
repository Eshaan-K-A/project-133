var status1 = "";
var img = "";
var length1;
var objects;
function preload(){
    img = loadImage("Bottles.png")
}
function setup(){
    canvas = createCanvas(700, 500);
    canvas.position(375, 250)
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("statusSpan").innerHTML = "Detecting Object(s)"
}






function modelLoaded() {
    console.log("Model Loaded!");
    status1 = true;
    document.getElementById("statusSpan").innerHTML = "Detecting Object(s)";
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
        length1 = results.length;

    }
}
function draw() {

    image(img, 0, 0, 700, 500);


    if (status1 == true) {
        for (i = 0; i < length1; i++) {
            fill("#1a75ff");
            strokeWeight(1);
            textSize(20);
            document.getElementById("statusSpan").innerHTML = "Objects Detected !!";
            document.getElementById("resultSpan").innerHTML = "Out of " + 5 + " objects, " + length1 + " object(s) were detected.";

            percent = floor(objects[i].confidence * 100) + " %";
            x = objects[i].x;
            y = objects[i].y;
            width = objects[i].width;
            height = objects[i].height;
            text(objects[i].label + " " + percent, x + 15, y + 25);
            noFill();
            stroke("#1a75ff");
            strokeWeight(3);
            rect(x, y, width, height);

        }
    }
}
function back(){
    window.location = "index.html";
}
