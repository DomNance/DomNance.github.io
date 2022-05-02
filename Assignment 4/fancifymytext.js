// Original font and background color
var originalF = "Arial";
var originalColor = "white";

function alertUser() {
    alert("Hello, world!");
    document.getElementById("textBox").style.fontSize = "20px";
}

function changeFont() {
    document.getElementById("textBox").style.fontFamily = "Georgia";
    document.getElementById("textBox").style.backgroundColor = "powderblue";
    document.getElementById("textBox").style.fontWeight = 900;
    document.getElementById("textBox").style.textDecorationLine = "underline";
    document.getElementById("boring").checked = false;
}

function originalFont() {
    document.getElementById("textBox").style.fontFamily = originalF;
    document.getElementById("textBox").style.backgroundColor = originalColor;
    document.getElementById("textBox").style.textDecorationLine = "normal";
    document.getElementById("textBox").style.fontWeight = 400;
    document.getElementById("fancy").checked = false;
}

function moo() {
    var messageText = document.getElementById("textBox").value;
    var parts = messageText.split(".");
    messageText = parts[0] + "-moo";
    document.getElementById("textBox").value = messageText;
}