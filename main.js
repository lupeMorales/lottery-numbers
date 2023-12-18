"use strict";

const buttonPlus = document.querySelector(".js-buttonPlus");
const buttonAdd = document.querySelector(".js-buttonAdd");
const formContainer = document.querySelector(".js-formContainer");
const nameForm = document.querySelector(".js-name");
const numberForm = document.querySelector(".js-number");
const priceForm = document.querySelector(".js-price");
const membersForm = document.querySelector(".js-members");

const dataForm = document.forms.data;

const loterryData = [];
const loterryDataObj = {
  name: "",
  number: "",
  price: "",
  members: [],
};
function fillObj() {
  loterryDataObj.name = nameForm.value;
  loterryDataObj.number = numberForm.value;
  loterryDataObj.price = priceForm.value;
  loterryDataObj.members = membersForm.value;
}

function resetForm() {
  nameForm.value = "";
  numberForm.value = "";
  priceForm.value = "";
  membersForm.value = "";
}

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
  const clickedElement = ev.target;
  fillObj();
  console.log(loterryDataObj);
  resetForm();
}

buttonPlus.addEventListener("click", handleClickPlus);
buttonAdd.addEventListener("click", handleClickAdd);
