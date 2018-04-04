function timer(v){

	//current time
	var d = new Date();
	
	if (d.getHours() >= 13 && v == 1){
		// 24 hour clock
		hrs = d.getHours();
		hrs = addZero(hrs, 1);
	} else {
		// 12 hour clock
		if (d.getHours() != 12 ) hrs = d.getHours() %12;
		else hrs = d.getHours();
		hrs = addZero(hrs, 0);
	}

	sec = addZero(d.getSeconds(), 0);
	min = addZero(d.getMinutes(), 0);
	
	document.getElementById("h").innerHTML = "<center>" + hrs + "</center>";
	document.getElementById("m").innerHTML = "<center>" + min + "</center>";
	document.getElementById("s").innerHTML = "<center>" + sec + "</center>";
	if (d.getHours() >= 12 && v == 0) {
		document.getElementById("pm").innerHTML = "PM";
	} else if (d.getHours() < 12 && v == 0) {
		document.getElementById("pm").innerHTML = "AM";
	} else {
		document.getElementById("pm").innerHTML = "";
	}

}

function addZero(v,i) {
	if (v < 10 && i == 0) return "0" + v;
	if (v < 10 && i == 1) return " " + v;
	return v;
}
