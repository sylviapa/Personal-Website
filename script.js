/* Toggle between showing and hiding the navigation menu links */
window.onload = function () {
  document.getElementById("hambar").addEventListener("click", getNAV);
};

getNAV();

function getNAV() {
  const y = document.getElementById("navbar");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

// Automatic Slideshow - change image every 4 seconds
let myIndex = 0;
carousel();

function carousel() {
  let i;
  const z = document.getElementsByClassName("mySlides");
  for (i = 0; i < z.length; i++) {
    z[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > z.length) { myIndex = 1; }
  z[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}
