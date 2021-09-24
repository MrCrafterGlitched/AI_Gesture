function setup() {
    canvas=createCanvas(400,400)
    canvas.position(500,150)

    video=createCapture(VIDEO)
    video.size(400,400)
    PoseNet=ml5.poseNet(video,model_loaded)
    PoseNet.on("pose",getPoses)
}
function model_loaded() {
    console.log("Model is loaded")
}
function draw() {
    background("#13d6a2")
}
function getPoses(results) {
    if (results.length>0) {
        console.log(results)
    }
}