noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
lifttWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    background('#fca503');
    Fill('#03bafc');
    stroke('#9803fc');
    square(noseX, noseY, difference);
}

function gotPoses(results)
{
    if(results.length > 0);
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX +"noseY =" + noseY );

        liftWristX = results[0].pose.liftWristX.x;
        rightWristX = results[0].pose.rightWristX.x;
        difference = floor(liftWristX -rightWrist);

        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
    }
}

