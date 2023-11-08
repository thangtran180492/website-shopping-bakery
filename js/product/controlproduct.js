/* front amount of product */
const amount = document.querySelector('.amount');
const buttons = document.querySelector('.buttons');
console.log(amount);
console.log(buttons);
buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains("add")) {
    amount.innerHTML++;
    setAmount();
  } else if (e.target.classList.contains("sub")) {
    amount.innerHTML--;
    setAmount();
  }
})
function setAmount() {
  if (amount.innerHTML > 5 || amount.innerHTML <= 0)
    amount.innerHTML = 1;
}
