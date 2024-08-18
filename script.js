var elem = document.querySelectorAll(".elem");

elem.forEach(function (value) {
  value.addEventListener("mouseenter", function () {
    value.childNodes[3].style.opacity = 1;
  });

  value.addEventListener("mouseleave", function () {
    value.childNodes[3].style.opacity = 0;
  });

  value.addEventListener("mousemove", function (dets) {
    value.childNodes[3].style.left = dets.x + "px";
    // value.childNodes[3].style.top = dets.y + "px";
  });
});

// var elemImage = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", function (dets) {
//   elemImage.style.left = dets.x + "px";
//   elemImage.style.top = dets.y + "px";
// });

// elem1.addEventListener("mouseenter", function(){

//     elemImage.style.opacity = 1;
// })
// elem1.addEventListener("mouseleave", function(){

//     elemImage.style.opacity = 0;
// })
