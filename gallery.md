2 Galleries

<style>
* {box-sizing: border-box}
body {font-family: Verdana, sans-serif; margin:0}
.mySlides {display: none}
img {vertical-align: middle;}

.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 30px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>

<div class="slideshow-container">

<div class="mySlides fade">
  <iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/DEvoronoi.html" width="100%" onload="this.style.height=this.contentDocument.body.scrollHeight +'px';" onresize="this.style.height=this.contentDocument.body.scrollHeight +'px';">
</iframe>
  <div class="text">DEvoronoi</div>
</div>

<div class="mySlides fade">
  <iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/EDvoronoi.html" width="100%" onload="this.style.height=this.contentDocument.body.scrollHeight +'px';" onresize="this.style.height=this.contentDocument.body.scrollHeight +'px';">
</iframe>
  <div class="text">EDvoronoi</div>
</div>

<div class="mySlides fade">
  <iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/GPledUCCwEDvoronoi.html" width="100%" onload="this.style.height=this.contentDocument.body.scrollHeight +'px';" onresize="this.style.height=this.contentDocument.body.scrollHeight +'px';">
</iframe>
  <div class="text">GPledUCCwEDvoronoi</div>
</div>

<div class="mySlides fade">
  <iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/IUCCASvoronoi.html" width="100%" onload="this.style.height=this.contentDocument.body.scrollHeight +'px';" onresize="this.style.height=this.contentDocument.body.scrollHeight +'px';">
</iframe>
  <div class="text">IUCCASvoronoi</div>
</div>

<div class="mySlides fade">
  <iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/MIUvoronoi.html" width="100%" onload="this.style.height=this.contentDocument.body.scrollHeight +'px';" onresize="this.style.height=this.contentDocument.body.scrollHeight +'px';">
</iframe>
  <div class="text">MIUvoronoi</div>
</div>

<div class="mySlides fade">
  <iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/OOHvoronoi.html" width="100%" onload="this.style.height=this.contentDocument.body.scrollHeight +'px';" onresize="this.style.height=this.contentDocument.body.scrollHeight +'px';">
</iframe>
  <div class="text">OOHvoronoi</div>
</div>

<div class="mySlides fade">
  <iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/SpecEDvoronoi.html" width="100%" onload="this.style.height=this.contentDocument.body.scrollHeight +'px';" onresize="this.style.height=this.contentDocument.body.scrollHeight +'px';">
</iframe>
  <div class="text">SpecEDvoronoi</div>
</div>

<div class="mySlides fade">
  <iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/UUHvoronoi.html" width="100%" onload="this.style.height=this.contentDocument.body.scrollHeight +'px';" onresize="this.style.height=this.contentDocument.body.scrollHeight +'px';">
</iframe>
  <div class="text">UUHvoronoi</div>
</div>

<div class="mySlides fade">
  <iframe src="https://fergustaylor.github.io/Dev/Hackday/voronoi/WICvoronoi.html" width="100%" onload="this.style.height=this.contentDocument.body.scrollHeight +'px';" onresize="this.style.height=this.contentDocument.body.scrollHeight +'px';">
</iframe>
  <div class="text">WICvoronoi</div>
</div>

<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>

</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
  <span class="dot" onclick="currentSlide(4)"></span> 
  <span class="dot" onclick="currentSlide(5)"></span> 
  <span class="dot" onclick="currentSlide(6)"></span> 
  <span class="dot" onclick="currentSlide(7)"></span> 
  <span class="dot" onclick="currentSlide(8)"></span> 
  <span class="dot" onclick="currentSlide(9)"></span> 
</div>

<script>
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
  slides[slideIndex-1].childNodes[1].style.height=slides[slideIndex-1].childNodes[1].contentDocument.body.scrollHeight +'px';
  dots[slideIndex-1].className += " active";
}
</script>