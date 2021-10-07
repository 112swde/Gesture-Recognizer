prediction_1 = ""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');


function  take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("camera").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version :", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hNsRV1k5-/model.json",modelLoaded);

function modelLoaded()
{
    console.log("model loaded !")
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data1 = "The prediction is" + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data1);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResults);
}

function gotResults(error,results)
{
     if(error)
     {
         console.log(error);
     }
     else
     {
         console.log(results);
         document.getElementById("result_gesture_name").innerHTML = results[0].label;
         prediction_1 = results[0].label;
         speak();
         if (results[0].label == "great")
         {
             document.getElementById("update_gesture").innerHTML = "&#128077;";
         }
         if (results[0].label == "amazing")
         {
             document.getElementById("update_gesture").innerHTML = "&#128076;";
         }
         if (results[0].label == "victory")
         {
             document.getElementById("update_gesture").innerHTML = "&#9996;";
         }
     }
}
