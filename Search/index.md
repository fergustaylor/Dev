
<script>
function myFunction() {
var frames = document.getElementsByTagName("iframe");
for (i = 0; i < frames.length; i++) {
      frames[i].style.height=frames[i].contentDocument.body.scrollHeight + 16 + 'px';
  }
}
window.addEventListener("load", myFunction);
window.addEventListener("resize", myFunction);
</script>

<style>
iframe {
 width:100%;
 min-height: 500px !important;
}}
</style>

<iframe src="https://fergustaylor.github.io/Dev/Search/example.html">
</iframe>

<script>
document.getElementsByTagName("iframe")[0].contentWindow.addEventListener("input", myFunction);
document.getElementsByTagName("iframe")[0].contentWindow.addEventListener("change", myFunction);
document.getElementsByTagName("iframe")[0].contentWindow.addEventListener("submit", myFunction);
</script>