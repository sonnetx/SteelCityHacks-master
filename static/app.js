let exercises = {
    0: "seconds of planks",
    1: "jumping jacks",
    2: "pushups",
    3: "situps",
    4: "burpees",
    5: "russian twists",
    6: "squats",
    7: "lunges",
    8: "diamond pushups",
    9: "high knees",
    10: "butt kicks",
    11: "zombie kicks",
    12: "side plank dips",

}



function showWebcam() {

    video.style.display = "block";
}

function hideWebcam() {

    video.style.display = "none";
}


var work = new Audio('work.mp3');

var breakTime = new Audio('break.m4a');
function beRed() {

    honelm.style.color = "red";

}

function beGreen() {

    honelm.innerHTML = "BREAK TIME!"
    honelm.style.color = "green";
    breakTime.play();

}


const modelParams = {
    flipHorizontal: true,   // flip e.g for video 
    imageScaleFactor: 1,  // reduce input image size for gains in speed.
    maxNumBoxes: 2,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.6,    // confidence threshold for predictions.
}


var totBrkTime = Number((brkmin * 60000) + (brksec * 1000));
var totWrkTime = Number((wrkmin * 60000) + (wrksec * 1000));

const honelm = document.getElementById("honelm");
var work = new Audio('work.mp3');

var breakTime = new Audio('break.m4a');

function beRed() {

    honelm.style.color = "red";

}

function beGreen() {

    honelm.innerHTML = "BREAK TIME!"
    honelm.style.color = "green";
    breakTime.play();

}

function megFunc() {
    beRed();
    beGreen();
    setTimeout(() => {
        beRed();
        honelm.innerHTML = "BACK TO WORK!"

        work.play();
    }, totBrkTime);

}

function genRandomNumber() {

   var randomnumber =  Number(Math.floor(Math.random() * 13));
console.log(randomnumber);
return randomnumber
}


const video = document.querySelector('#video');
const button1 = document.querySelector('#yeet');
const button2 = document.querySelector('#boom');
const audio = document.querySelector('#audio');
let model;


button1.addEventListener("click", () => {



    
function generateTheseNumbers(){
switch (genRandomNumber()){
    case 0:
        return "seconds of plank";
    case 1:
        return "jumping jacks";
    case 2:
        return "pushups";
    case 3:
        return "situps";
        
    case 4:
        return "burpees";
        
    case 5:
        return "russian twists";
        
    case 6:
        return "squats";
        
    case 7:
        return "lunges";
        
    case 8:
        return "diamond pushups";
        
    case 9:
        return"high knees";
        
    case 10:
        return "butt kicks";
        
    case 11:
        return "zombie kicks";
        
    case 12:
        return "side plank dips";
        
   
}}


    function megFunc() {
        beRed();
        beGreen();
        setTimeout(() => {
            beRed();
            honelm.innerHTML = "BACK TO WORK!"

            work.play();
        }, totBrkTime);

    }
    beRed();

    honelm.innerHTML = "BACK TO WORK!";


    var brkmin = document.getElementById("brkmin").value;
    var brksec = document.getElementById("brksec").value;
    var wrkmin = document.getElementById("wrkmin").value;
    var wrksec = document.getElementById("wrksec").value;

    if (Number(brkmin) == null) {
        brkmin = 0;

    }

    if (Number(brksec) == null) {
        brksec = 0;

    }
    if (Number(wrkmin) == null) {
        wrkmin = 0;
    }
    if (Number(wrksec) == null) {
        wrksec = 0;

    }

    var totBrkTime = Number((brkmin * 60000) + (brksec * 1000));
    var totWrkTime = Number((wrkmin * 60000) + (wrksec * 1000));

    setTimeout(() => {

        megFunc()
        document.getElementById("exercises").innerHTML = "Do " + Number(Math.floor(Math.random() * 20) + 5) + " " + generateTheseNumbers();


        setInterval(() => {

            megFunc()
            document.getElementById("exercises").innerHTML = "Do " + Number(Math.floor(Math.random() * 20) + 5) +" "+ generateTheseNumbers();
        }, totWrkTime + totBrkTime)

    }, totWrkTime)

    handTrack.startVideo(video)
        .then(status => {

            if (status) {
                navigator.getUserMedia({ video: {} }, stream => {
                    video.srcObject = stream;
                    setInterval(runDetection, 1000);
                },
                    err => console.log(err)
                )
            }

        })

    handTrack.load(modelParams).then(lmodel => {
        model = lmodel;

        handTrack.stopVideo(video);

    })


})

navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;


function refreshPage() {
    video.style.display = "none";
    window.location.reload();


}



function runDetection() {
    model.detect(video).then(predictions => {
        let xcoord = predictions[0].bbox[0];
        let ycoord = predictions[0].bbox[1];
        if (xcoord >= 170 && xcoord <= 330 && ycoord >= 90 && ycoord <= 210) {
            refreshPage()
        }
    });
}