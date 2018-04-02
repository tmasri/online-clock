
/* This is the color changer file, this is the file
 * that will handle the algorithm that is constantly
 * changing the background of the page, it will be called
 * once every 20 milliseconds to change the background
 * 
 * @ color[] -> 		holds the rgb values that will be
 * 						constantly changing
 * 	color[0] ->	Red
 * 	color[1] -> Green
 * 	color[2] -> Blue
 * @ colorName ->		helps the switch statement know which
 * 						algorithm to use when the function
 * 						is called
 * @ changeSpeed ->	this will control the speed of changing
 * 						the value for a few of the colors
 */
//				 r   g   b
let color= [255,255,255];
var colorName = "blue";
var changeSpeed = 0;

function background() {
	
	$("body").css('background-color', 'rgb('+color[0]+','+color[1]+','+color[2]+')');
	
	switch (colorName) {
		case "blue":
			// bring Red down to 60
			// bring Green down to 130
			if (color[0]> 60 || color[1]> 130) {
				if (color[0]> 60) color[0] -= 1;
				// make sure that green doesnt go down to fast
				if (changeSpeed == 1) {
					if (color[1]> 130) color[1] -= 1;
					changeSpeed = 0;
				} else changeSpeed++;
			} else {
				changeSpeed = 0;
				colorName = "purple";
			}
			// make sure that Blue goes up to 255
			if (color[2]< 255) color[2] += 1; 
			break;
		
		case "purple":
			if (color[0]< 255 || color[1]> 60) {
				if (color[0]< 255) color[0] += 1;
				if (changeSpeed == 1) {
					if (color[1]> 60) color[1] -= 1;
					changeSpeed = 0;
				} else changeSpeed++;
			} else {
				changeSpeed = 0;
				colorName = "red";
			}
			if (color[2]< 255) color[2] += 1;
			break;
		
		case "red":
			if (color[2]> 60) color[2] -= 1;
			else colorName = "orange";
			if (color[0]< 255) color[0] += 1;
			if (color[1]> 60) color[1] -= 1;
			break;
		
		case "orange":
			if (color[1]< 130) {
				color[1] += 1;
			} else colorName = "yellow";
			break;
		
		case "yellow":
			if (color[1]< 255) color[1] += 1;
			else colorName = "green";
			break;
		
		case "green":
			if (color[0]> 60 || color[2]< 130) {
				if (color[0]> 60) color[0] -= 1;
				if (changeSpeed = 1) {
					if (color[2]< 130) color[2] += 1;
					changeSpeed = 0;
				} else changeSpeed++;
			} else {
				changeSpeed = 0;
				colorName = "blue";
			}
			break;
		
	}
	
}
