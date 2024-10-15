console.log("hello world");
const canvas = document.getElementById("canvasMain");
const ctx = canvas.getContext("2d");
canvas.height = 2560;
canvas.width = 2560;
ctx.fillStyle = "white";
ctx.font = "100px monospace";

var lastTime;
    var requiredElapsed = 1000 / 50; 

    requestAnimationFrame(loop);

    function loop(now) {
        requestAnimationFrame(loop);

        if (!lastTime) { lastTime = now; }
        var elapsed = now - lastTime;

        if (elapsed > requiredElapsed) {
            ctx.fillText("Hello World", 50, 100);
            lastTime = now;
        }
    }
