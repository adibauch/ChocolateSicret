let slideIndex = 1;

// Initialize the slide index variable with a value of 1, indicating that the first slide is currently displayed.

// Next/previous controls
function plusSlides(n) {
    // This function is used to navigate to the next or previous slide.
    // It takes a parameter 'n' which indicates the amount of slides to move (positive for next, negative for previous).
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    // This function is used to navigate to a specific slide.
    // It takes a parameter 'n' which represents the index of the slide to display.
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // This function is responsible for displaying the slides and updating the slide index.
    // It takes a parameter 'n' which represents the index of the slide to display.

    let slides = document.getElementsByClassName("mySlides");
    // Get all elements with the class name "mySlides" and store them in the 'slides' variable.
    
    let dots = document.getElementsByClassName("demo");
    // Get all elements with the class name "demo" and store them in the 'dots' variable.
    
    let captionText = document.getElementById("caption");
    // Get the element with the ID "caption" and store it in the 'captionText' variable.

    if (n > slides.length) { slideIndex = 1; }
    // If the requested slide index is greater than the total number of slides, set the slide index to 1.
    
    if (n < 1) { slideIndex = slides.length; }
    // If the requested slide index is less than 1, set the slide index to the total number of slides.
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Loop through all the slides and hide them by setting their display style to "none".

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Loop through all the dots (thumbnail images) and remove the "active" class from their className property.
    
    slides[slideIndex - 1].style.display = "block";
    // Display the slide with the current slide index by setting its display style to "block".
    
    dots[slideIndex - 1].className += " active";
    // Add the "active" class to the dot corresponding to the current slide by appending it to the className property.
    
    captionText.innerHTML = dots[slideIndex - 1].alt;
    // Set the caption text to the alt attribute of the dot corresponding to the current slide.
}
