function timer(v){

	//current time
	var d = new Date();
	var dd = d.getTime() + d.getTimezoneOffset()*60*1000;
	
	//dd to seconds
	var sec = Math.floor(dd / 1000);
	
	//sec to min
	var min = Math.floor(sec / 60);
	
	//min to hrs
	var hrs = Math.floor(min / 60);
	
	//hrs to day
	var day = Math.floor(hrs / 24);
	
	//day to week
	var wk = Math.floor(day / 7);
	
	//wk to mn
	var mn = Math.floor(wk / 4);
	
	//mn to yr
	var y = Math.floor(mn / 12);
	
	hrs %= 24;
	min %= 60;
	sec %= 60;
	hrs += 4;
	
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

	sec = addZero(sec, 0);
	min = addZero(min, 0);
	
	document.getElementById("h").innerHTML = "<center>" + hrs + "</center>";
	document.getElementById("m").innerHTML = "<center>" + min + "</center>";
	document.getElementById("s").innerHTML = "<center>" + sec + "</center>";
	if (d.getHours() >= 12) {
		document.getElementById("pm").innerHTML = "PM";
	} else {
		document.getElementById("pm").innerHTML = "AM";
	}

}

function addZero(v,i) {
	if (v < 10 && i == 0) return "0" + v;
	if (v < 10 && i == 1) return " " + v;
	return v;
}
