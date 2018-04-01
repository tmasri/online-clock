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
	
	/*y %= 12;
	mn %= 4;
	wk %= 7;*/
	hrs %= 24;
	min %= 60;
	sec %= 60;
	hrs += 4;
	
	///console.log("v = " + v);
	//console.log("hrs = " + d.getHours());
	//console.log("date = " + d);
	if (d.getHours() >= 13 && v == 1){
		hrs = d.getHours();
	} else {
		hrs = d.getHours() %12;
	}
	
	document.getElementById("h").innerHTML = "<center>" + hrs + "</center>";
	document.getElementById("m").innerHTML = "<center>" + min + "</center>";
	document.getElementById("s").innerHTML = "<center>" + sec + "</center>";
	
	//var timer = setTimeout('timer('+v+')',1000);

}
