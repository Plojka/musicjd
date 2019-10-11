function myFunctionDrop() {
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
function countClicksOne() {
   var count = document.getElementById("clickmeOne");
count.innerText++;
}
function countClicksTwo() {
  var count = document.getElementById("clickmeTwo");
count.innerText++;
}
function countClicksThree() {
  var count = document.getElementById("clickmeThree");
count.innerText++;
}
function countClicksFour() {
  var count = document.getElementById("clickmeFour");
count.innerText++;
}
function countClicksFive() {
  var count = document.getElementById("clickmeFive");
count.innerText++;
}
function countClicksSix() {
  var count = document.getElementById("clickmeSix");
count.innerText++;
}
function countClicksSeven() {
  var count = document.getElementById("clickmeSeven");
count.innerText++;
}
function countClicksEight() {
  var count = document.getElementById("clickmeEight");
count.innerText++;
}
function countClicksNine() {
  var count = document.getElementById("clickmeNine");
count.innerText++;
}
function countClicksTen() {
  var count = document.getElementById("clickmeTen");
count.innerText++;
}
function countClicksEleven() {
  var count = document.getElementById("clickmeEleven");
count.innerText++;
}
function countClicksTwelve() {
  var count = document.getElementById("clickmeTwelve");
  count.innerText++;
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

function myFunction1() {
  document.getElementById("panel").style.display = "block";
}
function myFunction2() {
  document.getElementById("panel2").style.display = "block";
}
function myFunction3() {
  document.getElementById("panel3").style.display = "block";
}
function myFunction4() {
  document.getElementById("panel4").style.display = "block";
}
function myFunction5() {
  document.getElementById("panel5").style.display = "block";
}

//contact
function myFunction() {
  document.getElementById("myContactForm").submit();
}