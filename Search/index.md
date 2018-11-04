<iframe src="example.html" id="iframe"></iframe>

<script>
function myFunction() {
document.getElementById('iframe').height = document.getElementById('iframe').contentDocument.body.scrollHeight +'px';
}

window.addEventListener("load", myFunction);
window.addEventListener("resize", myFunction);
</script>

<script src="parent.js"></script>

<style>
iframe {
width:100%;
min-height: 300px !important;
}
</style>
