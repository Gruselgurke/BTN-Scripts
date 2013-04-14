// ==UserScript==
// @name        Change Schedule Time Zone
// @namespace   Gruselgurke
// @description changes time zone used on the schedule page based on your time zone
// @updateURL	
// @include     *broadcasthe.net/tvschedule.php
// @grant		-
// @version     0.2
// ==/UserScript==
var d = new Date();
var n = d.getTimezoneOffset();
console.log("working..");
console.log(n);
var colChild = document.getElementsByClassName("colhead");
	for(var i=0; i<colChild.length; i++)
	{			 
	  if(colChild[i].getAttribute("colspan")=="6")
	  {
		console.log(colChild[i].innerHTML)
		var timeVal = colChild[i].innerHTML.toString().split(":")
		console.log(timeVal)
		timeVal2 = timeVal[1].split(" ")[0]
		timeVal = timeVal[0]
		console.log(timeVal)
		console.log(timeVal2)
		colChild[i].innerHTML = convertTimeZone(timeVal,timeVal2)
}}
function convertTimeZone(hour,minutes){
var time = "pm";
hour = hour-5+(n/60);
switch (hour)

	{
	case 1:
		hour = 13;
		break;	
	case 2:
		hour = 14;
		break;	
	case 3:
		hour = 15;
		break;	
	case 4:
		hour = 16;
		break;	
	case 5:
		hour = 17;
		break;
	case 6:
		hour = 18;
		break;
	case 7:
		hour = 19;
		break;
	case 8:
		hour = 20;
		break;
	case 9:
		hour = 21;
		break;		
	case 10:
		hour = 22;
		break;	
	case 11:
		hour = 23;
		break;	
	case 12:
		hour = 24;
		break;	
	default:
		hour = hour;
	}		
	if (hour >= 12){
	hour = hour-12;
	time = "am";
	}
	if (hour+minutes == 30){
	time = "am";
	}
	var result = hour+":"+minutes+" "+time;
	console.log(result)
	return result;
}