var i = 0;
var txt = 'Exploring, One Frontier at a Time 🚀';
var speed = 100; 

function typeWriter() {
if (i < txt.length) {
    document.getElementById("animation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
}
typeWriter()

var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("display_none");
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 30000);
}

var modal_popup = document.getElementById("interests")
var modal_btn = document.getElementById("modal_btn")
var modal_close = document.getElementsByClassName("close_modal")[0]

modal_btn.onclick = function(){
  modal_popup.style.display = "block";
}

modal_close.onclick = function(){
  modal_popup.style.display = "none";
}

window.onclick = function(event){
  if (event.target == modal_popup){
    modal_popup.style.display = "none"
  };
}

search_form = document.getElementById('search');
search_query = document.getElementById('search_query');

const NOOGLE = "https://noogle-search.herokuapp.com/search?q=";

function search_noogle(event) {
  event.preventDefault();
  const url_to_open = NOOGLE + search_query.value;
  const window_with_search = window.open(url_to_open, '_blank');
  window_with_search.focus();
}

search_form.addEventListener('submit', search_noogle);
