
// $('.owl-carousel').owlCarousel({
//   loop: true,
//   margin: 10,
//   responsiveClass: true,
//   responsive: {
//       0: {
//           items: 1,
//       },
//       600: {
//           items: 2,
//       },
//       1000: {
//           items: 3,
//           loop: false
//       }
//   }
// })


// Frequently asked questions
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// video

var elem = document.getElementById("myvideo");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


// change img
function changeImg_1(){
    const img = document.getElementById("changeIag");
    img.src= './img/home/1how.png '
}
function changeImg_2(){
    const img = document.getElementById("changeIag");
    img.src= './img/home/2how.png '
}
function changeImg_3(){
    const img = document.getElementById("changeIag");
    img.src= './img/home/3how.png '
}