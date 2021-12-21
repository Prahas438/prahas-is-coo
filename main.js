
leftwristx=0;
rightwristx=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is Initialized');
}
function draw(){
    background('blue');
    document.getElementById("font_size").innerHTML="Font size of the text will be="+difference+" px";
   fill('#F90093');
   textSize(difference);
   text('Prahas',50,400);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
       leftwristX=results[0].pose.leftWrist.x;
       rightwristX=results[0].pose.rightWrist.x;
       difference=floor(leftwristX-rightwristX);
       console.log("leftwristX = "+leftwristX+" rightwristX = "+rightwristX+" difference="+difference);
   }


