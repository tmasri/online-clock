let color= [255,255,255];
var colorValue = "blue";
var changeSpeed = 0;

function background() {
	
	$("body").css('background-color', 'rgb('+color[0]+','+color[1]+','+color[2]+')');
	
	switch (colorValue) {
		case "blue":
			if (color[0]> 60 || color[1]> 130) {
				if (color[0]> 60) color[0] -= 1;
				if (changeSpeed == 1) {
					if (color[1]> 130) color[1] -= 1;
					changeSpeed = 0;
				} else changeSpeed++;
			} else {
				changeSpeed = 0;
				colorValue = "purple";
			}
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
				colorValue = "red";
			}
			if (color[2]< 255) color[2] += 1;
			break;
		
		case "red":
			if (color[2]> 60) color[2] -= 1;
			else colorValue = "orange";
			if (color[0]< 255) color[0] += 1;
			if (color[1]> 60) color[1] -= 1;
			break;
		
		case "orange":
			if (color[1]< 130) {
				color[1] += 1;
			} else colorValue = "yellow";
			break;
		
		case "yellow":
			if (color[1]< 255) color[1] += 1;
			else colorValue = "green";
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
				colorValue = "blue";
			}
			break;
		
	}
	
}
