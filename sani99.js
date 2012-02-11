// tutorial based on http://creativejs.com/2012/01/day-11-sprite-sheets/
// screen size variables
        var SCREEN_WIDTH = window.innerWidth,
        SCREEN_HEIGHT = window.innerHeight;        
         
		var canvas = document.createElement('canvas');
		var c = canvas.getContext('2d');
          
        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;
        
        var initX = 0;
		var	initY = 0;
		var	xpos = initX;
        var ypos = initY;
        var index=0;
        var numFrames = 30;
        var frameSizeX= 253;
		var	frameSizeY= 280;
         
		// Add our drawing canvas
		document.body.appendChild(canvas);

		//load the image
        image = new Image();
        image.src = "cdsprite.png";
        
        image.onload = function() {
        
            //we're ready for the loop
            setInterval(loop, 1000 / numFrames);
        }
               
    
        function loop() {
            //clear the canvas!
            c.clearRect(0,0, SCREEN_HEIGHT,SCREEN_WIDTH);
            
			c.drawImage(image,xpos,ypos,frameSizeX,frameSizeY,0,0,frameSizeX, frameSizeY);
            /*The long list means...:
                1: image source
                2 - 5: the rectangle in the source image to cut from
                6 - 9: the rectangle of the canvas being to paste to
                
                the increment changes the part of the source image bring cut from each time loop() is called
                the rectangle bring pasted to here is not.
			*/

			//each time around we add the frame size to our xpos, moving along the source image like an old film strip
			xpos += frameSizeX;
			//increase the index so you know which frame of the animation comes next
			index += 1;
            
			//if the index is higher than the total number of frames, we're at the end and better start over
			if (index >= numFrames) {
				xpos = initX;
				ypos = initY;
				index=0;
			}
        }