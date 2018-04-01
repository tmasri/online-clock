function background(r,g,b,c,v) {
	
	$("body").css('background-color', 'rgb('+r+','+g+','+b+')');
	
	switch (v) {
		case "blue":
			if (r > 60 || g > 130) {
				if (r > 60) r--;
				if (c == 1) {
					if (g > 130) g--;
					c = 0;
				} else c++;
			} else {
				c = 0;
				v = "purple";
			}
			if (b < 255) b++; 
			break;
		
		case "purple":
			if (r < 255 || g > 60) {
				if (r < 255) r++;
				if (c == 1) {
					if (g > 60) g--;
					c = 0;
				} else c++;
			} else {
				c = 0;
				v = "red";
			}
			if (b < 255) b++;
			break;
		
		case "red":
			if (b > 60) b--;
			else v = "orange";
			if (r < 255) r++;
			if (g > 60) g--;
			break;
		
		case "orange":
			if (g < 130) {
				g++;
			} else v = "yellow";
			break;
		
		case "yellow":
			if (g < 255) g++;
			else v = "green";
			break;
		
		case "green":
			if (r > 60 || b < 130) {
				if (r > 60) r--;
				if (c = 1) {
					if (b < 130) b++;
					c = 0;
				} else c++;
			} else {
				c = 0;
				v = "blue";
			}
			break;
		
	}
	
	setTimeout('background('+r+','+g+','+b+', '+c+', \"'+v+'\")', 20);
	
}
