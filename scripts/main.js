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