
<script>
function myFunction() {
var frames = document.getElementsByTagName("iframe");
for (i = 0; i < frames.length; i++) {
      frames[i].style.height=frames[i].contentDocument.body.scrollHeight +'px';
  }
}
window.addEventListener("load", myFunction);
window.addEventListener("resize", myFunction);
</script>

<style>
iframe {
 width:100%;
}
</style>

<iframe src="../table.html">
</iframe>