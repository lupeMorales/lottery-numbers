"use strict";

const buttonPlus = document.querySelector(".js-buttonPlus");
const buttonAdd = document.querySelector(".js-buttonAdd");
const formContainer = document.querySelector(".js-formContainer");
const lotteryForm = document.querySelector(".js-lotteryForm");

const lotteryCard = document.querySelector(".js-lotteryCard");
const nameForm = document.querySelector(".js-name");
const numberForm = document.querySelector(".js-number");
const priceForm = document.querySelector(".js-price");
const membersForm = document.querySelector(".js-members");

const lotteryData = [];
const lotteryDataObj = {
  name: "",
  number: "",
  price: "",
  members: [],
};

/**** pruebita *****/
const animal = [];
console.log(animal);
animal.push("perro");
console.log(animal);
animal.push("gato");
console.log(animal);

function fillObj() {
  lotteryDataObj.name = nameForm.value;
  lotteryDataObj.number = numberForm.value;
  lotteryDataObj.price = priceForm.value;
  lotteryDataObj.members = membersForm.value;
}

function fillData(data) {
  lotteryData.push(data);
}

function resetForm() {
  nameForm.value = "";
  numberForm.value = "";
  priceForm.value = "";
  membersForm.value = "";
}

function renderLotterycard() {
  let html = "";

  lotteryData.forEach((item) => {
    html += `
    <article class="card-container">
    <div info>
    <p class="lottery-price">${item.price}€</p>
    <p class="lottery-number">${item.number}</p>
    <p class="lottery-name">${item.name}</p>
    </div>
<div class="members-container">
    <p id="members-text">${item.members}</p></div>
 

  </article>`;
  });

  lotteryCard.innerHTML = html;
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

  fillObj();
  console.log(lotteryDataObj);

  fillData(lotteryDataObj);

  console.log(lotteryData);
  renderLotterycard();
  resetForm();
}

buttonPlus.addEventListener("click", handleClickPlus);
buttonAdd.addEventListener("click", handleClickAdd);

/* console.log(document.forms.data.name.value);
  console.log(document.forms.data.number.value);
  console.log(document.forms.data.price.value);
  console.log(document.forms.data.members.value);
 */

/* const dataForm = document.forms.data; */
