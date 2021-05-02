const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.widh = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
ctx.globalCompositeOperation = 'multiply'; // ps blend mode https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
// ctx is where we do all our drawing for canvas.

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return;  // stop the function from running when they are not moused.
    // console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;

    //Start a path
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke(); // we do not see anything on the page until we stroke.
    [lastX, lastY] = [e.offsetX, e.offsetY]; //ES6 trick(destructring in array) = lastX = e.offsetX; lastY = e.offsetY;
    hue++;
    if (hue >= 360) { // reset after 360
        hue = 0;
    }
    if(ctx.lineWidth>=100 || ctx.lineWidth <=1){
        direction = !direction; // flip the direction
    }
    if(direction)
    {
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }    
}


canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; // it will prevent starting from 0,0 at the beginning.
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


// https://mothereffinghsl.com/
// hsl is the rainbow that programatically you can select pieces from.
// hsl(red, saturation, lightness)