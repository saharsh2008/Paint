var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
line_width = "2";
canvas.addEventListener("mousedown", myMouseDown);
radius = "2";

function myMouseDown(e) {
    mouseEvent = "mousedown";
    color = document.getElementById("color").value;
    console.log(color);
    radius = document.getElementById("radiusOfCircle").value;
    line_width = document.getElementById("widthOfLine").value;
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e) {
    mosuseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    currentPositionOfX = e.clientX - canvas.offsetTop;
    currentPositionOfY = e.clientY - canvas.offsetLeft;
    if (mouseEvent == "mousedown") {
        console.log("current position of x and y ");
        console.log("x =" + currentPositionOfX + ", y =" + currentPositionOfY);
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc(currentPositionOfX, currentPositionOfY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
