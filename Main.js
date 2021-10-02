function  take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("camera").innerHTML = "<img id='captured_image' src="+data_uri+"/>";
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
    speak_data1 = "The first prediction is" + prediction1;
    speak_data2 = "and the second prediction is" + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data1);
    synth.speak(utterThis);
}