noseX= 0;
noseY = 0;
difference= 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');
    fill('f90093');
    stroke('f90093');
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML = "Height and Width of square will be " + difference +"px";
}

function modelloaded(){
    console.log("PoseNet model is initialised");
}

function gotPoses(results) {
if(results.length >0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY = " + noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("rightWristX = " + rightWristX + "leftWristX = " + leftWristX + "difference = " + difference);
}
}