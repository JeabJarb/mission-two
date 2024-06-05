console.log("Connected!!! 🥝🥝🥝");
// naming variable from HTML
// just clicking and img
const kiwiEl = document.getElementById("kiwiImg");
const pointsDisplayEl = document.getElementById("pointsDisplay"); // total display points

// additional click/ auto
// +1 click
const add1ClickDisplayEl = document.getElementById("add1ClickCount");
// +1 auto
const add1AutoDisplayEl = document.getElementById("add1AutoCount");
// // +5 click
const add5ClickDisplayEl = document.getElementById("add5ClickCount");
// +5 auto
const add5AutoDisplayEl = document.getElementById("add5AutoCount");
// +100 auto
const add100AutoDisplayEl = document.getElementById("add100AutoCount");

// ========== Currency ========== //
// 🥝 💸 🎮 🐟 🎁 🍵 🍡 🥐
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// ========== Sounds Zone ========== //
const clickSound = document.getElementById("soundClick");
const popSound = document.getElementById("soundPop");
const cancelSound = document.getElementById("soundCancel");
const coinsSound = document.getElementById("soundCoins");
const backgroundSound = document.getElementById("soundBackground");

// === Playback === //
clickSound.playbackRate = 6.5;
popSound.playbackRate = 4;
cancelSound.playbackRate = 6.5;
coinsSound.playbackRate = 1;

// === Volume === //
backgroundSound.volume = 0.5;
coinsSound.volume = 0.5;

// === Bacground Music === //
backgroundSound.loop = true;
backgroundSound.play();

// === Sound Toggle On/Off === //
const volumeIcon = document.getElementById("volumeIcon");
document.addEventListener("DOMContentLoaded", (event) => {
  backgroundSound;
  volumeIcon;
  window.toggleVolume = function () {
    if (backgroundSound.muted) {
      backgroundSound.muted = false;
      coinsSound.muted = false;
      cancelSound.muted = false;
      popSound.muted = false;
      clickSound.muted = false;
      volumeIcon.src = "./assests/vOn.png";
    } else {
      backgroundSound.muted = true;
      coinsSound.muted = true;
      cancelSound.muted = true;
      popSound.muted = true;
      clickSound.muted = true;
      volumeIcon.src = "./assests/vOff.png";
    }
  };
});

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// ========== Themes Zone ========== //
const kiwiBrown = "./assests/kiwi1.png";
const kiwiGreen = "./assests/kiwi2.png";
const kiwiPink = "./assests/kiwi3.png";
const kiwiBlack = "./assests/kiwi4.png";
const kiwiRed = "./assests/kiwi5.png";
const capybara = "./assests/capybara.png";
const chinchilla = "./assests/chinchilla.png";
const croissant = "./assests/croissant.png";

function changeBrown() {
  kiwiEl.src = kiwiBrown;
  document.querySelector("#currencyPoint").textContent = "🥝";
  document.querySelector("#currencyShop1").textContent = "🥝 ";
  document.querySelector("#currencyShop2").textContent = "🥝 ";
  document.querySelector("#currencyShop3").textContent = "🥝 ";
  document.querySelector("#currencyShop4").textContent = "🥝 ";
  document.querySelector("#currencyShop5").textContent = "🥝 ";
}
function changeGreen() {
  kiwiEl.src = kiwiGreen;
  document.querySelector("#currencyPoint").textContent = "💸";
  document.querySelector("#currencyShop1").textContent = "💸 ";
  document.querySelector("#currencyShop2").textContent = "💸 ";
  document.querySelector("#currencyShop3").textContent = "💸 ";
  document.querySelector("#currencyShop4").textContent = "💸 ";
  document.querySelector("#currencyShop5").textContent = "💸 ";
}
function changePink() {
  kiwiEl.src = kiwiPink;
  document.querySelector("#currencyPoint").textContent = "🎮";
  document.querySelector("#currencyShop1").textContent = "🎮 ";
  document.querySelector("#currencyShop2").textContent = "🎮 ";
  document.querySelector("#currencyShop3").textContent = "🎮 ";
  document.querySelector("#currencyShop4").textContent = "🎮 ";
  document.querySelector("#currencyShop5").textContent = "🎮 ";
}
function changeBlack() {
  kiwiEl.src = kiwiBlack;
  document.querySelector("#currencyPoint").textContent = "🐟";
  document.querySelector("#currencyShop1").textContent = "🐟 ";
  document.querySelector("#currencyShop2").textContent = "🐟 ";
  document.querySelector("#currencyShop3").textContent = "🐟 ";
  document.querySelector("#currencyShop4").textContent = "🐟 ";
  document.querySelector("#currencyShop5").textContent = "🐟 ";
}
function changeRed() {
  kiwiEl.src = kiwiRed;
  document.querySelector("#currencyPoint").textContent = "🎁";
  document.querySelector("#currencyShop1").textContent = "🎁 ";
  document.querySelector("#currencyShop2").textContent = "🎁 ";
  document.querySelector("#currencyShop3").textContent = "🎁 ";
  document.querySelector("#currencyShop4").textContent = "🎁 ";
  document.querySelector("#currencyShop5").textContent = "🎁 ";
}
function changeCapybara() {
  kiwiEl.src = capybara;
  document.querySelector("#currencyPoint").textContent = "🍵";
  document.querySelector("#currencyShop1").textContent = "🍵 ";
  document.querySelector("#currencyShop2").textContent = "🍵 ";
  document.querySelector("#currencyShop3").textContent = "🍵 ";
  document.querySelector("#currencyShop4").textContent = "🍵 ";
  document.querySelector("#currencyShop5").textContent = "🍵 ";
}
function changeChinchilla() {
  kiwiEl.src = chinchilla;
  document.querySelector("#currencyPoint").textContent = "🍡";
  document.querySelector("#currencyShop1").textContent = "🍡 ";
  document.querySelector("#currencyShop2").textContent = "🍡 ";
  document.querySelector("#currencyShop3").textContent = "🍡 ";
  document.querySelector("#currencyShop4").textContent = "🍡 ";
  document.querySelector("#currencyShop5").textContent = "🍡 ";
}
function changeCroissant() {
  kiwiEl.src = croissant;
  document.querySelector("#currencyPoint").textContent = "🥐";
  document.querySelector("#currencyShop1").textContent = "🥐 ";
  document.querySelector("#currencyShop2").textContent = "🥐 ";
  document.querySelector("#currencyShop3").textContent = "🥐 ";
  document.querySelector("#currencyShop4").textContent = "🥐 ";
  document.querySelector("#currencyShop5").textContent = "🥐 ";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// ========== Unlock Conditions ========== //

let myBrownKiwi = document.querySelector(".brown");
myBrownKiwi.style.boxShadow = "2px 2px 5px rgb(84, 66, 47)";
myBrownKiwi.style.backgroundColor = "rgb(91, 63, 34)";
myBrownKiwi.style.cursor = "pointer";

function checkCondition() {
  if (clickCount >= 10000000) {
    // ⭐⭐⭐⭐⭐⭐⭐⭐

    let myCroissant = document.querySelector(".croissant");
    myCroissant.style.boxShadow = "2px 2px 5px rgb(84, 66, 47)";
    myCroissant.style.backgroundColor = "orange";
    myCroissant.style.cursor = "pointer";
  } else if (clickCount >= 1000000) {
    // ⭐⭐⭐⭐⭐⭐⭐

    let myChinchilla = document.querySelector(".chinchilla");
    myChinchilla.style.boxShadow = "2px 2px 5px rgb(84, 66, 47)";
    myChinchilla.style.backgroundColor = "grey";
    myChinchilla.style.cursor = "pointer";
  } else if (clickCount >= 100000) {
    // ⭐⭐⭐⭐⭐⭐

    let myCapybara = document.querySelector(".capybara");
    myCapybara.style.boxShadow = "2px 2px 5px rgb(84, 66, 47)";
    myCapybara.style.backgroundColor = "#c3ad96";
    myCapybara.style.cursor = "pointer";
  } else if (clickCount >= 10000) {
    // ⭐⭐⭐⭐⭐

    let myRedKiwi = document.querySelector(".red");
    myRedKiwi.style.boxShadow = "2px 2px 5px rgb(84, 66, 47)";
    myRedKiwi.style.backgroundColor = "rgb(255, 0, 0)";
    myRedKiwi.style.cursor = "pointer";
  } else if (clickCount >= 1000) {
    // ⭐⭐⭐⭐

    let myBlackKiwi = document.querySelector(".black");
    myBlackKiwi.style.boxShadow = "2px 2px 5px rgb(84, 66, 47)";
    myBlackKiwi.style.backgroundColor = "rgb(0, 0, 0)";
    myBlackKiwi.style.cursor = "pointer";
  } else if (clickCount >= 100) {
    // ⭐⭐⭐

    let myPinkKiwi = document.querySelector(".pink");
    myPinkKiwi.style.boxShadow = "2px 2px 5px rgb(84, 66, 47)";
    myPinkKiwi.style.backgroundColor = "rgb(255, 135, 249)";
    myPinkKiwi.style.cursor = "pointer";
  } else if (clickCount >= 10) {
    //⭐⭐

    let myGreenKiwi = document.querySelector(".green");
    myGreenKiwi.style.boxShadow = "2px 2px 5px rgb(84, 66, 47)";
    myGreenKiwi.style.backgroundColor = "rgb(0, 129, 24)";
    myGreenKiwi.style.cursor = "pointer";
  } else {
    //⭐

    let myBrownKiwi = document.querySelector(".brown");
    myBrownKiwi.style.boxShadow = "2px 2px 5px rgb(84, 66, 47)";
    myBrownKiwi.style.backgroundColor = "rgb(91, 63, 34)";
    myBrownKiwi.style.cursor = "pointer";
  }
}

// ========== Function areas ========== //
let clickCount = 0;
let multiplier = 1;

function whenClick() {
  clickCount += multiplier; //apply the multiplier
  totalPoints(); // update the total point display
  checkCondition();

  // add clicking animation effect
  kiwiEl.addEventListener("click", function (event) {
    event.target.animate(
      [
        {
          transform: "translateX(0px)",
        },
        {
          transform: "translateX(4px)",
        },
        {
          transform: "translateX(-2px)",
        },
        {
          transform: "translateX(1px)",
        },
        {
          transform: "translateX(0px)",
        },
      ],
      {
        duration: 50, // duration for animation to play
      }
    );
  });
  clickSound.play(); // activate sound play when click
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

// ========== aad 1 click ========== //
let add1ClickCount = 0; // this will multiply per click by +1
function add1Click() {
  // check if there are enough point to purchase the +1 click
  if (clickCount >= 50) {
    popSound.play();
    coinsSound.play();
    clickCount -= 50; // buy 50 points
    multiplier += 1; // increase points per click by 1
    add1ClickCount++; // increase +1 click purchase count
    totalPoints(); // update total points display
    add1ClickDisplayEl.textContent = add1ClickCount; // update click count by 1
  } else {
    cancelSound.play();
    console.log("Not enough points!");
    // add "not enough point effect"
    document.getElementById("add1ClickButton").style.background = "red";

    setTimeout(function () {
      // set time out for uneable effect
      document.getElementById("add1ClickButton").style.background = "";
    }, 100);
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

// ========== aad 1 auto ========== //
let add1AutoCountPerSec = 0;
let add1AutoClickCount = 0;
function add1Auto() {
  // check if there are enough point to purchase the +1 kiwi per second
  if (clickCount >= 100) {
    popSound.play();
    coinsSound.play();
    clickCount -= 100; // buy 100 points
    add1AutoCountPerSec += 1; // increase earning point per second by 1 kiwi
    totalPoints(); // update total points display
    add1AutoClickCount++;
    add1AutoDisplayEl.textContent = add1AutoClickCount; // update click count by 1
  } else {
    cancelSound.play();
    console.log("Not enough points!");
    // add "not enough point effect"
    document.getElementById("add1AutoButton").style.background = "red";

    setTimeout(function () {
      // set time out for uneable effect
      document.getElementById("add1AutoButton").style.background = "";
    }, 100);
  }
}

setInterval(function () {
  // set timer to add point to totalsPoint every 1 sec
  if (add1AutoCountPerSec > 0) {
    clickCount += add1AutoCountPerSec;
    totalPoints();
  }
}, 1000);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// ========== aad 5 click ========== //
let add5ClickCount = 0;
function add5Click() {
  // check if there are enough point to purchase the +5 click
  if (clickCount >= 500) {
    popSound.play();
    coinsSound.play();
    clickCount -= 500; // buy 500 points
    multiplier += 5; // increase points per click by 5
    add5ClickCount++; // increase +5 click purchase count
    totalPoints(); // update total points display
    add5ClickDisplayEl.textContent = add5ClickCount; // update the display for +5 click count
  } else {
    cancelSound.play();
    console.log("Not enough points!");
    // add "not enough point effect"
    document.getElementById("add5ClickButton").style.background = "red";

    setTimeout(function () {
      document.getElementById("add5ClickButton").style.background = "";
    }, 100);
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

// ========== aad 5 Auto ========== //
let add5AutoCountPerSec = 0;
let add5AutoClickCount = 0;
function add5Auto() {
  // check if there are enough point to purchase the +5 kiwi per second
  if (clickCount >= 1000) {
    popSound.play();
    coinsSound.play();
    clickCount -= 1000; // buy 1000 points
    add5AutoCountPerSec += 5; // increase earning point per second by 5 kiwi
    totalPoints(); // update total points display
    add5AutoClickCount++;
    add5AutoDisplayEl.textContent = add5AutoClickCount; // update click count by 1
  } else {
    cancelSound.play();
    console.log("Not enough points!");
    // add "not enough point effect"
    document.getElementById("add5AutoButton").style.background = "red";

    setTimeout(function () {
      document.getElementById("add5AutoButton").style.background = "";
    }, 100);
  }
}

setInterval(function () {
  if (add5AutoCountPerSec > 0) {
    clickCount += add5AutoCountPerSec;
    totalPoints();
  }
}, 1000);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// ========== aad 100 Auto ========== //
let add100AutoCountPerSec = 0;
let add100AutoClickCount = 0;
function add100Auto() {
  // check if there are enough point to purchase the +100 kiwi per second
  if (clickCount >= 10000) {
    popSound.play();
    coinsSound.play();
    clickCount -= 10000; // buy 10000 points
    add100AutoCountPerSec += 100; // increase earning point per second by 100 kiwi
    totalPoints(); // update total points display
    add100AutoClickCount++;
    add100AutoDisplayEl.textContent = add100AutoClickCount; // update click count by 1
  } else {
    cancelSound.play();
    console.log("Not enough points!");
    // add "not enough point effect"
    document.getElementById("add100AutoButton").style.background = "red";

    setTimeout(function () {
      document.getElementById("add100AutoButton").style.background = "";
    }, 100);
  }
}

setInterval(function () {
  if (add100AutoCountPerSec > 0) {
    clickCount += add100AutoCountPerSec;
    totalPoints();
  }
}, 1000);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// ========== totals ========== //
function totalPoints() {
  pointsDisplayEl.textContent = clickCount; // update the display with current click count
}
totalPoints();

///////////////////////////////////////////////////////////////////////////////////////////////////////
