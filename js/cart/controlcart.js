
/* cart */
function buttonConfirm() {
  document.getElementById("form-output").classList.add("form-hiden");
  document.getElementById("order-success").classList.remove("form-hiden");
  setEffectSuccess();

}
// effect card of the cart
function setEffectSuccess() {
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++)
    cards[i].classList.add("success-card");
  document.getElementById("total-summary").classList.add("success-summary");
}

function backInput() {
  document.getElementById("form-input").classList.remove("form-hiden");
  document.getElementById("form-output").classList.add("form-hiden");
}

function buttonCart() {
  const input = document.querySelectorAll("#input");
  const output = document.querySelectorAll("#output");
  let check = setOutput(input, output);
  if (check) {
    document.getElementById("form-input").classList.add("form-hiden");
    document.getElementById("form-output").classList.remove("form-hiden");
  }
}

function setOutput(input, ouput) {
  let check = true;
  for (let i = 0; i < input.length; i++) {
    if (input[i].value.length > 0) {
      ouput[i].innerHTML = input[i].value;
      input[i].style.border = "solid 3px rgb(0, 173, 87)";
    } else if (i < 3) {
      check = false;
      input[i].style.border = "solid 3px rgb(231, 0, 39)";
    }
  }
  return check;
}