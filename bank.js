const loanBtnElement = document.getElementById("loanBtn");

let initiaBalance = 200;
document.getElementById("balance").innerHTML = initiaBalance;

const containsOnlyNumbers = (input) => {
  return /^\d+$/.test(input);
};

const handleLoan = () => {
  const balance = Number(document.getElementById("balance").innerHTML);
  const loan = Number(document.getElementById("loan").innerHTML);
  console.log("t", loan);
  if (loan > 0) {
    return alert("You already have a loan");
  }

  const userLoanInput = prompt("Type in how much you wish to loan: ");
  let validateInput = containsOnlyNumbers(userLoanInput);

  if (!validateInput) {
    return alert("Please only use numbers");
  }
  let parseInputToNumber = Number(userLoanInput);

  if (parseInputToNumber <= balance * 2) {
    document.getElementById("loan").innerHTML = userLoanInput;
    document.getElementById("loanContainer").style.visibility = "visible";
  }
};

loanBtnElement.addEventListener("click", handleLoan);
