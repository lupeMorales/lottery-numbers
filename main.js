"use strict";

const buttonPlus = document.querySelector(".js-button");
const formContainer = document.querySelector(".js-formContainer");

function handleClickPlus(ev) {
  ev.preventDefault();
  if (buttonPlus.innerHTML === "+") {
    buttonPlus.innerHTML = "-";
  } else {
    buttonPlus.innerHTML = "+";
  }
  formContainer.classList.toggle("hidden");
}

buttonPlus.addEventListener("click", handleClickPlus);
