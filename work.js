const workBtnElement = document.getElementById("workBtn");
const bankBtnElement = document.getElementById("bankBtn");
const payLoanBtnElement = document.getElementById("payloan");

const handleWork = () => {
  let pay = Number(document.getElementById("pay").innerHTML);
  let newPay = pay + 100;
  document.getElementById("pay").innerHTML = newPay;
};

const payLoan = () => {
  let pay = Number(document.getElementById("pay").innerHTML);
  let loan = Number(document.getElementById("loan").innerHTML);
  let balance = Number(document.getElementById("balance").innerHTML);
  let newLoanBalance = loan - pay;
  if (newLoanBalance > 0) {
    document.getElementById("loan").innerHTML = newLoanBalance;
  } else if (newLoanBalance == 0) {
    document.getElementById("loan").innerHTML = newLoanBalance;
    document.getElementById("loanContainer").style.visibility = "hidden";
    document.getElementById("payloan").style.visibility = "hidden";
  } else {
    newLoanBalance = Math.abs(newLoanBalance);
    document.getElementById("loan").innerHTML = 0;
    document.getElementById("balance").innerHTML = balance + newLoanBalance;
    document.getElementById("loanContainer").style.visibility = "hidden";
    document.getElementById("payloan").style.visibility = "hidden";
  }

  document.getElementById("pay").innerHTML = 0;
};

const transferMoney = () => {
  let loan = Number(document.getElementById("loan").innerHTML);
  let balance = Number(document.getElementById("balance").innerHTML);
  let pay = Number(document.getElementById("pay").innerHTML);

  if (loan > 0) {
    let sumToPayOf = (pay / 100) * 10;
    let balanceAfterPayLoan = balance + pay - sumToPayOf;
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
    document.getElementById("payloan").style.visibility = "hidden";
  }
};

bankBtnElement.addEventListener("click", transferMoney);
workBtnElement.addEventListener("click", handleWork);
payLoanBtnElement.addEventListener("click", payLoan);
