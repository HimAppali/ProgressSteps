"use strict";
const progress = document.querySelector(".progress");
const nextBtn = document.querySelector(".btn_next");
const prevBtn = document.querySelector(".btn_prev");
const numbers = document.querySelectorAll(".number");
const numContainer = document.querySelector(".numpart");
let startIndex = 1;

nextBtn.addEventListener("click", function (e) {
  startIndex++;
  if (startIndex > numbers.length + 1) {
    startIndex = numbers.length;
  }
  forward();
});
prevBtn.addEventListener("click", function () {
  startIndex--;
  console.log(startIndex, numbers.length);
  if (startIndex < 1) {
    startIndex = 1;
  }
  forward();
});

const forward = function () {
  numbers.forEach(function (num, i) {
    if (i < startIndex) {
      num.classList.add("active-border");
    } else {
      num.classList.remove("active-border");
    }

    const actives = document.querySelectorAll(".active-border");
    // the width will be 0%, 33%,66%,99% respectively
    progress.style.width =
      ((actives.length - 1) / (numbers.length - 1)) * 100 + "%";

    if (startIndex === 1) {
      prevBtn.classList.add("disable");
    } else if (startIndex === numbers.length) {
      nextBtn.classList.add("disable");
    } else {
      prevBtn.classList.remove("disable");
      nextBtn.classList.remove("disable");
    }
  });
};
