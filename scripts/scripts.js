function playAlohomora() {
  var sound = document.getElementById('sound');
  sound.play();
  sound.addEventListener('ended', function () {
    location.href = 'p1.html';
    return false;
  });
}

function playFluffy1() {
  document.querySelectorAll('audio').forEach((el) => el.pause());
  var sound = document.getElementById('sound1');
  var sound2 = document.getElementById('sound1-1');
  sound.play();
  sound.addEventListener('ended', function () {
    fluffyScript1();
    sound2.play();
    fluffyShowNext();
  });
}
function playFluffy2() {
  document.querySelectorAll('audio').forEach((el) => el.pause());
  var sound1 = document.getElementById('sound2');
  var sound2 = document.getElementById('sound2-1');
  sound1.play();
  sound1.addEventListener('ended', function () {
    sound2.play();
    fluffyScript2();
  });
}
function playFluffy3() {
  document.querySelectorAll('audio').forEach((el) => el.pause());
  var sound = document.getElementById('sound3');
  sound.play();
  sound.addEventListener('ended', function () {
    fluffyScript3();
  });
}

function fluffyScript1() {
  const script = document.getElementById('script-fluffy');
  script.innerHTML = "NOICE! The doggo fell asleep. Now let's go, muggle!";
}

function fluffyScript2() {
  const script = document.getElementById('script-fluffy');
  script.innerHTML =
    "You can't throw cooked chicken bones to a dog! It's dangerous!";
}

function fluffyScript3() {
  const script = document.getElementById('script-fluffy');
  script.innerHTML = 'Argh! Too many ears to bite! This won`t work';
}

function fluffyShowNext() {
  document.getElementById('fluffy-1').style.display = 'none';
  document.getElementById('fluffy-next').style.display = 'block';
}

function playDevil1() {
  devilScript1();
}
function playDevil2() {
  devilScript2();
  devilShowNext();
}
function playDevil3() {
  devilScript3();
}

function devilScript1() {
  const script = document.getElementById('script-devil');
  script.innerHTML =
    "It's choking me harder! This is not the way to do it, muggle! You made it block the instruction text!";
  document.getElementById('devilssnare').style.transform = 'scale(2.0)';
  document.getElementById('devilssnare').style.transition = 'all 2s';
}

function devilScript2() {
  const script = document.getElementById('script-devil');
  script.innerHTML = 'You want me to relax? At this state? Blimey! It worked!';
}

function devilScript3() {
  const script = document.getElementById('script-devil');
  script.innerHTML =
    "How would I know how to use that spell? You think I'm Emma Watson?";
}

function devilShowNext() {
  document.getElementById('devil-2').style.display = 'none';
  document.getElementById('devil-next').style.display = 'block';
}

function playPotion1() {
  document.querySelectorAll('audio').forEach((el) => el.pause());
  var sound = document.getElementById('sound');
  sound.play();
  sound.addEventListener('ended', function () {
    poisonScript();
    goGrave();
  });
}
function playPotion2() {
  document.querySelectorAll('audio').forEach((el) => el.pause());
  var sound = document.getElementById('sound');
  sound.play();
  sound.addEventListener('ended', function () {
    wineScript();
    goDrunk();
  });
}

function playPotion3() {
  document.querySelectorAll('audio').forEach((el) => el.pause());
  var sound = document.getElementById('sound');
  sound.play();
  sound.addEventListener('ended', function () {
    forwardScript();
    goForward();
  });
}

function playPotion4() {
  document.querySelectorAll('audio').forEach((el) => el.pause());
  var sound = document.getElementById('sound');
  sound.play();
  sound.addEventListener('ended', function () {
    poisonScript();
    goGrave();
  });
}
function playPotion5() {
  document.querySelectorAll('audio').forEach((el) => el.pause());
  var sound = document.getElementById('sound');
  sound.play();
  sound.addEventListener('ended', function () {
    poisonScript();
    goGrave();
  });
}

function playPotion6() {
  document.querySelectorAll('audio').forEach((el) => el.pause());
  var sound = document.getElementById('sound');
  sound.play();
  sound.addEventListener('ended', function () {
    wineScript();
    goDrunk();
  });
}

function playPotion7() {
  document.querySelectorAll('audio').forEach((el) => el.pause());
  var sound = document.getElementById('sound');
  sound.play();
  sound.addEventListener('ended', function () {
    backwardScript();
    goBackward();
  });
}

function poisonScript() {
  const script = document.getElementById('script-potion');
  script.innerHTML = 'This is poison! Aarggggghhh!!!';
}

function wineScript() {
  const script = document.getElementById('script-potion');
  script.innerHTML = "Blimey! This is alcohol! I'm underage, you idiot!";
}

function forwardScript() {
  const script = document.getElementById('script-potion');
  script.innerHTML = 'This must be it! Hurry up, muggle!';
}

function backwardScript() {
  const script = document.getElementById('script-potion');
  script.innerHTML = 'You dumbo! This leads us back to the start!';
}

function goGrave() {
  document.querySelectorAll('.potion-btn').forEach(function (el) {
    el.style.display = 'none';
  });
  document.getElementById('potion-grave').style.display = 'block';
}

function goDrunk() {
  document.querySelectorAll('.potion-btn').forEach(function (el) {
    el.style.display = 'none';
  });
  document.getElementById('potion-azkaban').style.display = 'block';
}

function goForward() {
  document.querySelectorAll('.potion-btn').forEach(function (el) {
    el.style.display = 'none';
  });
  document.getElementById('potion-forward').style.display = 'block';
}

function goBackward() {
  document.querySelectorAll('.potion-btn').forEach(function (el) {
    el.style.display = 'none';
  });
  document.getElementById('potion-backward').style.display = 'block';
}

function potionShowNext() {
  document.querySelectorAll('potion-btn').style.display = 'none';
  document.getElementById('potion-grave').style.display = 'block';
}
