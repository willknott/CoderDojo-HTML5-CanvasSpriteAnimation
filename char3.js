// screen size variables
        var SCREEN_WIDTH = window.innerWidth,
        SCREEN_HEIGHT = window.innerHeight;        
         
		var canvas = document.createElement('canvas');
		var c = canvas.getContext('2d');
          
        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;
        
        var initX = 1;
			initY = 83;
			xpos=initX;
            ypos=initY;
            index=0;
            numFrames = 4;
			frameSizeX = 133;
            frameSizeY = 134;
         
		// Add our drawing canvas
		document.body.appendChild(canvas);

		//load the image
        image = new Image();
        image.src = "char3.png";
		//sprite sheet from widgetworx
        
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