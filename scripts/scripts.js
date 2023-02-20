// function playAudio(url, page) {
//   var sound = new Audio(url).play();
//   sound.addEventListener('ended', function () {
//     location.href = page;
//     return false;
//   });
// }

// function playAudio(url, page) {
//   new Audio(url).play();
// }

function playAudio() {
  var sound = document.getElementById('sound');
  sound.play();
  sound.addEventListener('ended', function () {
    location.href = 'p1.html';
    return false;
  });
}
