var count=0, timerId, go=false;

function start_click(){
	  start.innerHTML="Pause";
	    if (go==false){
      		timerId = setInterval(function() {
      			count++;
      			var msek=count%100;
                if (msek<10) {msek = "0"+msek;}
      			var sek=Math.floor(count/100)%60;
      			    if (sek<10) {sek = "0"+sek;}
      			var min = Math.floor(count/6000)%60;
                if (min<10) {min = "0"+min;}
      			var hours = Math.floor(count/360000)%24;
                if (hours<10) {hours = "0"+hours;}
      			var str = hours+":"+min+":"+sek+":"+msek;
      			time.innerHTML=str;
      		}, 10);
      	  go=true;
      	}
    start.style.display = "none";
    pause.style.display = "inline-block";
}

function pause_click(){
	  clearInterval(timerId);
	  go=false;
    start.innerHTML="Continue";
    start.style.display = "inline-block";
    pause.style.display = "none";
}

function stp_click(){
	  clearInterval(timerId);
	  go=false;
	  count = 0;
	  time.innerHTML="00:00:00:00";
    pause.style.display = "none";
    start.innerHTML="Start";
    start.style.display = "inline-block";
}

start.addEventListener("click", start_click);
pause.addEventListener("click", pause_click);
stp.addEventListener("click", stp_click);
