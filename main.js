function setup()
{
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0ioJc958J/model.json",modelLoaded)
}

function draw(){
    image(video,0,0,400,300);
    classifier.classify(video, gotResult)
}

function modelLoaded()
{
    console.log("Model Loaded:");
}

function gotResult(error,result)
{
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(2)*100+"%";

    }
}













































