window.addEventListener('load', init, false);
function init() {

    let width = window.innerWidth;
    let height = window.innerHeight;

    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext('2d');

    //Add a simple image to the canvas.
    var image = new Image();
    image.src = 'image.jpg';
    image.onload = function () {
        //Simple image
        // @param image
        // @param x position
        // @param y position
        // context.drawImage(image, 0 ,0);

        //1. Scale
        // @param image
        // @param x position
        // @param y position
        // @param width
        // @param height
        // context.drawImage(image, 0 ,0, 200, 200);

        //2. Slice
        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        // @param image     - image object
        // @param sx        - slice x position
        // @param sy        - slice  y position
        // @param sWidth    - slice width
        // @param sHeight   - slice height
        // @param dx        - x position
        // @param dy        - y position
        // @param dWidth    - width
        // @param dHeight   - height
        context.drawImage(image, 3, 0, 3, 3, 10, 10, 3, 3);
    };

    var sprite = new Image();
    sprite.src = 'sprite.png';

    var scale = 200;
    var xpos = 0;
    var ypos = 100;

    var frameX = 0;
    var frameY = 0;
    var framesOnX = 4;
    var framesOnY = 1;

    var frameWidth = 939;
    var frameHeight = 678;
    var frameRate = 1000 / 12;

    function updateSprite() {

        frameX++;
        if (frameX >= framesOnX) {
            frameX = 0;
            frameY++;
            if (frameY >= framesOnY) {
                frameY = 0;
            }
        }
    }


    sprite.onload = function () {
        window.setInterval(updateSprite, frameRate);
    };

    function update() {

        xpos += 1;
        if ((xpos - scale) >= window.innerWidth) {
            xpos = 0 - scale;
        }

        context.clearRect(0, 0, width, height);
        context.drawImage(sprite, (frameX * frameWidth), (frameY * frameHeight), frameWidth, frameHeight, xpos, ypos, scale, scale);

        requestAnimationFrame(update);
    }

    update();
}

