nose_y = 0; 
nose_x = 0 ; 

function preload(){
    clone_nose = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet( video, modelLoaded);
    poseNet.on('pose' , gotPose);
}

function modelLoaded(){
    console.log("The poseNet has been Inisialised");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x ;
        nose_y = results[0].pose.nose.y ;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0 , 0 , 300 , 300);
    image(clone_nose , nose_x , nose_y , 55 , 55);
}

function take_snapshot(){
    save('lipstickFilterImg.png');
}