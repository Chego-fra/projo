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
});






 // -----------------------------------games----------------


 document.addEventListener("DOMContentLoaded", function() {
    let slideContent = document.querySelectorAll("[explode]");

// access buttons
let nex = document.querySelector("[nexting]");
let pre = document.querySelector("[preving]");

var counterGames = 0;

// code for after button
nex.addEventListener("click", slideAfter);
function slideAfter() {
    slideContent[counterGames].style.animation = "nex1 0.5s ease-in forwards";
    if (counterGames >= slideContent.length - 1) {
        counterGames = 0;
    } else {
        counterGames++;
    }
    slideContent[counterGames].style.animation = "nex2 0.5s ease-in forwards";
}

// code for before button
pre.addEventListener("click", slideBefore);
function slideBefore() {
    slideContent[counterGames].style.animation = "pre1 0.5s ease-in forwards";
    if (counterGames == 0) {
        counterGames = slideContent.length - 1;
    } else {
        counterGames--;
    }
    slideContent[counterGames].style.animation = "pre2 0.5s ease-in forwards";
}


function autoSliding() {
    deletInterval = setInterval(timer,2000);
    function timer() {
        slideAfter();
        indicators(); 
    }
}
autoSliding() 


// ---------------stop auto sliding when mouse is over-------------
const container = document.querySelector(".explore-cont")
container.addEventListener("mouseover", function() {
    clearInterval(deletInterval);
});
// ---------------resume sliding when mouse is out-------------
container.addEventListener("mouseout", autoSliding);


});




// -----------------------------------games----------------


document.addEventListener("DOMContentLoaded", function() {
    let slideContent = document.querySelectorAll("[tumbler]");

// access buttons
let nex = document.querySelector("[Nex]");
let pre = document.querySelector("[Pre]");

var counters= 0;

// code for after button
nex.addEventListener("click", slideMbele);
function slideMbele() {
    slideContent[counters].style.animation = "nextins1 0.5s ease-in forwards";
    if (counters >= slideContent.length - 1) {
        counters = 0;
    } else {
        counters++;
    }
    slideContent[counters].style.animation = "nextins2 0.5s ease-in forwards";
}

// code for before button
pre.addEventListener("click", slideNyuma);
function slideNyuma() {
    slideContent[counters].style.animation = "previns1 0.5s ease-in forwards";
    if (counters == 0) {
        counters = slideContent.length - 1;
    } else {
        counters--;
    }
    slideContent[counters].style.animation = "previns2 0.5s ease-in forwards";
}


function autoSlidings() {
    deletInterval = setInterval(timer,2000);
    function timer() {
        slideMbele();
    }
}
autoSlidings() 


// ---------------stop auto sliding when mouse is over-------------
const container = document.querySelector(".Cup-cont")
container.addEventListener("mouseover", function() {
    clearInterval(deletInterval);
});
// ---------------resume sliding when mouse is out-------------
container.addEventListener("mouseout", autoSlidings);


});

