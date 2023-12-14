const form = document.getElementById("form");
const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const cardDate = document.getElementById("exp-data");
const cardCvc = document.getElementById("cvc");
const errors = document.querySelectorAll(".error-message");
const number = document.querySelector(".card-number");
const name = document.querySelector(".card-name");
const date = document.querySelector(".card-date");
const cvc = document.querySelector(".card-cvc");


function handleForm(e) {
  e.preventDefault();
  const numberValue = cardNumber.value;
  const nameValue = cardName.value;
  const dateValue = cardDate.value;
  const cvcValue = cardCvc.value;
  const numberRegex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  const nameRegex = /^[a-zA-Z\s']{2,16}$/;
  const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvcRegex = /^\d{3}$/;


  if (numberRegex.test(numberValue)) {
    number.innerText = numberValue;
    cardNumber.style.borderColor = "green";
    errors.forEach(error => {
      if(error.className.includes("number")) {
        error.style.display = "none";
      }
    })
  } else {
    cardNumber.style.borderColor = "red";
    errors.forEach(error => {
      if(error.className.includes("number")) {
        error.style.display = "block";
      }
    })
  }

  if(nameRegex.test(nameValue)) {
    name.innerText = nameValue;
    cardName.style.borderColor = "green";
    errors.forEach(error => {
      if(error.className.includes("name")) {
        error.style.display = "none";
      }
    })
  } else {
    cardName.style.borderColor = "red";
    errors.forEach(error => {
      if(error.className.includes("name")) {
        error.style.display = "block";
      }
    })
  }

  if(dateRegex.test(dateValue)) {
    date.innerText = dateValue;
    cardDate.style.borderColor = "green";
    errors.forEach(error => {
      if(error.className.includes("date")) {
        error.style.display = "none";
      }
    })
  } else {
    cardDate.style.borderColor = "red";
    errors.forEach(error => {
      if(error.className.includes("date")) {
        error.style.display = "block";
      }
    })
  }

  if(cvcRegex.test(cvcValue)) {
    cvc.innerText = cvcValue;
    cardCvc.style.borderColor = "green";
    errors.forEach(error => {
      if(error.className.includes("cvc")) {
        error.style.display = "none";
      }
    })
  } else {
    cardCvc.style.borderColor = "red";
    errors.forEach(error => {
      if(error.className.includes("cvc")) {
        error.style.display = "block";
      }
    })
  }
}

form.addEventListener("submit", handleForm);