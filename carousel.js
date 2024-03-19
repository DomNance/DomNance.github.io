let slideIndex = 1;
const images = ["pdf examples/LPSample.jpg", "pdf examples/BTSSample.jpg", "pdf examples/AVSample.jpg"];

function plusSlidesRight(addition) {
    if ((slideIndex+addition) == 0) {
        slideIndex=2;
    } else if ((slideIndex+addition) == images.length) {
        slideIndex=0;
    } else {
        slideIndex++;
    }
    document.getElementById("photoID").src = images[slideIndex];
    document.getElementsByClassName("nextImage").src = images[nextValueAbove(slideIndex)];
}

function plusSlidesLeft(addition) {
    if ((slideIndex+addition) == -1) {
        slideIndex=2;
    } else if ((slideIndex+addition) == images.length) {
        slideIndex=0;
    } else {
        slideIndex--;
    }
    document.getElementById("photoID").src = images[slideIndex];
    document.getElementsByClassName("nextImage").src = images[nextValueAbove(slideIndex)];
}

function nextValueAbove(current) {
    if ((current+1) > images.length) {
        return 0;
    }
    return current++;
}

function nextValueBelow(current) {
    if ((current-1) < 0) {
        return images.length--;
    }
    return current--;
}

function currentImageIndex() {
    return slideIndex;
}

function displayImage() {
    return images[slideIndex];
}

function changeText() {
    // Get the element with id "demo"
    var demoElement = document.getElementById("counting");

    // Change the innerHTML of the element
    demoElement.innerHTML = "Hello, JavaScript!";
}