console.log("Connected!!! 🥝🥝🥝")

// naming variable from HTML
// just clicking and img
const kiwiEl = document.getElementById("kiwiImg")
const poinstDisplayEl = document.getElementById("points")

// additional click/ auto
// +1 click
const add1ClickDisplayEl = document.getElementById("add1ClickCount")
// +1 auto
const add1AutoDisplayEl = document.getElementById("add1AutoCount")
// +5 click
const add5ClickDisplayEl = document.getElementById("add5ClickCount")
// +5 auto
const add5AutoDisplayEl = document.getElementById("add5AutoCount")
// +100 auto
const add100AutoDisplayEl = document.getElementById("add100AutoCount")

///////////////////////////////////////////////////////////////////////////////////////////////////////


// ========== Function areas ========== //
let clickCount = 0;
let plus1Click = 2;
function addClick() {
    clickCount += 1
    poinstDisplayEl.textContent = clickCount
}


// ========== aad 1 click ========== //
let add1ClickCount = 0;
function add1Click() {
    add1ClickCount ++;
    add1ClickDisplayEl.textContent = add1ClickCount
}








// // ========== aad 1 auto ========== //
// let add1AutoCount = 0;
// function add1Auto() {
//     add1AutoCount ++;
//     add1AutoDisplayEl.textContent = add1AutoCount
// }

// // ========== aad 5 click ========== //
// let add5ClickCount = 0;
// function add5Click() {
//     add5ClickCount ++;
//     add5ClickDisplayEl.textContent = add5ClickCount
// }

// // ========== aad 5 Auto ========== //
// let add5AutoCount = 0;
// function add5Auto() {
//     add5AutoCount ++;
//     add5AutoDisplayEl.textContent = add5AutoCount
// }

// // ========== aad 100 Auto ========== //
// let add100AutoCount = 0;
// function add100Auto() {
//     add100AutoCount ++;
//     add100AutoDisplayEl.textContent = add100AutoCount
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////

// ========== when add +1 click ========== //



// ========== totals ========== //
// ========== when clicking ========== //

