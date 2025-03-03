function uploadSpeciesImage() {
    let fileInput = document.getElementById("speciesFileInput");
    if (fileInput.files.length > 0) {
        alert("Fish species image uploaded successfully!");
    } else {
        alert("Please select an image first.");
    }
}

function startSpeciesCamera() {
    let video = document.getElementById("speciesVideo");
    let captureBtn = document.getElementById("speciesCaptureBtn");
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.style.display = "block";
            captureBtn.style.display = "block";
            video.srcObject = stream;
        })
        .catch(err => {
            console.error("Error: ", err);
            alert("Camera access denied or not available.");
        });
}

function captureSpeciesImage() {
    let video = document.getElementById("speciesVideo");
    let canvas = document.getElementById("speciesCanvas");
    let context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.display = "block";
    alert("Fish species image captured successfully!");
}

function uploadDiseaseImage() {
    let fileInput = document.getElementById("diseaseFileInput");
    if (fileInput.files.length > 0) {
        alert("Disease detection image uploaded successfully!");
    } else {
        alert("Please select an image first.");
    }
}

function startDiseaseCamera() {
    let video = document.getElementById("diseaseVideo");
    let captureBtn = document.getElementById("diseaseCaptureBtn");
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.style.display = "block";
            captureBtn.style.display = "block";
            video.srcObject = stream;
        })
        .catch(err => {
            console.error("Error: ", err);
            alert("Camera access denied or not available.");
        });
}

function captureDiseaseImage() {
    let video = document.getElementById("diseaseVideo");
    let canvas = document.getElementById("diseaseCanvas");
    let context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.display = "block";
    alert("Disease detection image captured successfully!");
}
