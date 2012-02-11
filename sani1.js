// screen size variables
        var SCREEN_WIDTH = window.innerWidth,
        SCREEN_HEIGHT = window.innerHeight;        
         
		var canvas = document.createElement('canvas');
		var c = canvas.getContext('2d');
          
        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;

		// Add our drawing canvas
		document.body.appendChild(canvas);

		//load the image
        image = new Image();
        image.src = "cdsprite.png";
        
		c.drawImage(image,0,0,250,250,0,0,250,250);
		