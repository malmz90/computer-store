const workBtnElement = document.getElementById("workBtn");
const bankBtnElement = document.getElementById("bankBtn");

const handleWork = () => {
  let pay = Number(document.getElementById("pay").innerHTML);
  let newPay = pay + 100;
  document.getElementById("pay").innerHTML = newPay;
};

const handlePayBack = (loan, pay) => {
  return loan - (pay / 100) * 10;
};

const transferMoney = () => {
  let loan = Number(document.getElementById("loan").innerHTML);
  let balance = Number(document.getElementById("balance").innerHTML);
  let pay = Number(document.getElementById("pay").innerHTML);

  if (loan > 0) {
    let sumToPayOf = (pay / 100) * 10;
    let balanceAfterPayLoan = balance + pay - sumToPayOf;
    console.log("b", balanceAfterPayLoan);
    document.getElementById("loan").innerHTML = loan - sumToPayOf;
    document.getElementById("balance").innerHTML = balanceAfterPayLoan;
    document.getElementById("pay").innerHTML = 0;
  } else {
    document.getElementById("balance").innerHTML = pay + balance;
    document.getElementById("pay").innerHTML = 0;
  }
  let updatedLoan = Number(document.getElementById("loan").innerHTML);
  if (updatedLoan <= 0) {
    document.getElementById("loanContainer").style.visibility = "hidden";
  }
};

bankBtnElement.addEventListener("click", transferMoney);
workBtnElement.addEventListener("click", handleWork);
