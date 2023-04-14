song = "";
leftWristX = 0;
leftWristY = 0;
RightWristX = 0;
RightWristY = 0;

function preload(){
    song= loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');  
}

function draw() {
    Image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song,setVolume(1);
    song.rate(1);
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;
        console.log("leftWristX = "+ leftWristX +" leftWristY ="+ leftWristY);

        rightWristX = results[0].pose.rightWrist.X;
        righttWristY = results[0].pose.rightWrist.Y;
        console.log("righttWristX = "+ rightWristX +" rightWristY ="+ rightWristY);
    }
}