<iframe src="workbook.html" id="iframe"></iframe>

<script>
function myFunction() {
var frames = document.getElementsByTagName("iframe");
for (i = 0; i < frames.length; i++) {
      frames[i].style.height=frames[i].contentDocument.body.scrollHeight +'px';
  }
}
window.addEventListener("load", myFunction);
window.addEventListener("resize", myFunction);

document.getElementById("iframe").contentWindow.document.body.onclick = myFunction;
</script>

<style>
iframe {
 width:100%;
}
</style>