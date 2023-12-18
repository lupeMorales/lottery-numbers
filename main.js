"use strict";

const buttonPlus = document.querySelector(".js-buttonPlus");
const buttonAdd = document.querySelector(".js-buttonAdd");
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

function handleClickAdd(ev) {
  ev.preventDefault();
  console.log("NO MISIELA");
}

buttonPlus.addEventListener("click", handleClickPlus);
buttonAdd.addEventListener("click", handleClickAdd);
