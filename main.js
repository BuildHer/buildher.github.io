function scheduleCheck() {
    var accessCode = prompt("Please enter your access code", "whyhellothere :D");
    var scheduleText = document.getElementById("schedule-text");
    if (accessCode !== null && accessCode === "buildherup") {
        	scheduleText.style.display = 'inline';
        	document.getElementById("schedule-btn-box").style.display ='none';
    } else  {
    	alert("Invalid access code");
    }
}