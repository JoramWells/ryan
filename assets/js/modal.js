
var modal = document.getElementById("myModal");

var btn = document.getElementById("Btns");

var span = document.getElementsByClassName("funga")[0];

btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}