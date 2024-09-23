const menuHandler = () => {


    const menuToggleBtn = document.querySelector("#Menu-toggle");
    const respoNav = document.querySelector(".Respo-nav");
    const menuIcon = document.querySelector("#Menu-icon");


    menuToggleBtn.addEventListener("click", ()=>{
        respoNav.classList.toggle("Nav-open");
        if (respoNav.classList.contains("Nav-open")) {
            menuIcon.classList.replace('bx-menu', 'bx-x');
        }
        else{
            menuIcon.classList.replace('bx-x', 'bx-menu');
        }
    })


}
menuHandler();




// -------------------------------slides--------------------------


// access slides
document.addEventListener("DOMContentLoaded", function() {
    // access the images
let slideImages = document.querySelectorAll("[sliderimg]")

// access buttons
let next = document.querySelector("[slidenext]");
let prev = document.querySelector("[slideprev]");

// access dots
let dots = document.querySelectorAll("[slidedot]");

var counter = 0;

// code for next
next.addEventListener("click", slideForward);
function slideForward() {
    slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
    if (counter >= slideImages.length-1) {
        counter = 0;
    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
    indicators(); 
}

// code for prev
prev.addEventListener("click", slideBackwards);
function slideBackwards() {
    slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
    if (counter == 0) {
        counter = slideImages.length-1;
    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
    indicators();
}

// autosliding 
function autosliding() {
    deleteInterval = setInterval(timer, 3000);
    function timer() {
        slideForward();
        indicators();
    }
}
autosliding();

// stop autosliding when mouse is over
const container = document.querySelector("[boxcontainigslides]");
container.addEventListener("mouseover", function() {
    clearInterval(deleteInterval);
});

// resume autosliding when mouse is out
container.addEventListener("mouseout", autosliding)

// add and remove active class from the indicators 
function indicators() {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");   
    }
    dots[counter].className += " active";
}

// add click event to the indicator
function switchImage(currentImage){
    currentImage.classList.add("active");
    var imageId = currentImage.getAttribute("attr");
    if (imageId > counter) {
     slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
     counter = imageId;
     slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
    }
    else if (imageId == counter) {
       return; 
    }
    else{
     slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
     counter = imageId;
     slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
    }
    indicators();
}
})