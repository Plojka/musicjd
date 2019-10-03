function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//button of myAudio
function playAudio() {
  var oAudio = document.getElementById('myAudio');  
  if (oAudio.paused) { 
      oAudio.play(); 
  } 
  else { 
      oAudio.pause();  
  } 
}   

function playAudio_two() {
  var oAudio_two = document.getElementById('myAudio_two');  
  if (oAudio_two.paused) { 
      oAudio_two.play(); 
  } 
  else { 
      oAudio_two.pause();  
  } 
} 

function playAudio_thre() {
  var oAudio_thre = document.getElementById('myAudio_thre');  
  if (oAudio_thre.paused) { 
      oAudio_thre.play(); 
  } 
  else { 
      oAudio_thre.pause();  
  } 
}

//social
var count = 0;
function countClicks() {
 count = count + 1;
    document.getElementById("clickme").innerHTML = count;
}

//slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}
