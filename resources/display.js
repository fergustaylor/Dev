var li = document.querySelectorAll("li *");
for (i = 0; i < li.length; i++) {
    li[i].addEventListener("click", selectit);
}

function selectit() {
  //decolour all links
  var li = document.querySelectorAll("li *");
  for (i = 0; i < li.length; i++) {
      li[i].style.backgroundcolour = "none";
      //li[i].style.colour = "black";
  }
  //colour the link.
  this.style.backgroundcolour = "#18515E";
  //hide all section divs
  var all = document.querySelectorAll("div.level1");
  for (i = 0; i < all.length; i++) {
      all[i].style.display = "none";
  }
  //show the specified div
  document.querySelector(this.hash).style.display = "block";
}
