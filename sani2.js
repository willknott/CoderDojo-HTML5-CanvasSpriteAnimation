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
        
		c.drawImage(image,xpos,ypos,frameSizeX,frameSizeY,0,0,frameSizeX, frameSizeY);
		