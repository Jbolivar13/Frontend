// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
  
  // Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
  
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

function cambio1(){
   document.getElementById('imagen_base').src = "./images/image-product-1.jpg"
}

function cambio2(){
    document.getElementById('imagen_base').src = "./images/image-product-2.jpg"
}

function cambio3(){
    document.getElementById('imagen_base').src = "./images/image-product-3.jpg"
}

function cambio4(){
    document.getElementById('imagen_base').src = "./images/image-product-4.jpg"
}

