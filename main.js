// function scheduleCheck() {
//     var accessCode = prompt("Please enter your access code", "whyhellothere :D");
//     if (accessCode !== null && accessCode === "buildher7828") {
//         location="booklet.html";
//     } else  {
//     	alert("Invalid access code");
//     }
// }

function accessBooklet() {
    var accessCode = prompt("Please enter your access code");
    if (accessCode !== null && accessCode === "buildherup123") {
        booklet = document.getElementById("booklet");
        booklet.style.display = "block";
        button = document.getElementById("dayof-button");
        button.style.display = "none";
    } else  {
    	alert("Invalid access code");
    }
}

function openPage(pageName, e) {
    var i, tabs, buttons;
    tabs = document.getElementsByClassName("dayof-section");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    buttons = document.getElementsByClassName("tab");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "white";
    }
    document.getElementById(pageName).style.display = "block";
    e.style.backgroundColor = "#f7cbe6";
}