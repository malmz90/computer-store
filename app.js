const loanBtnElement = document.getElementById("loanBtn");

let initiaBalance = 200;
let loan = 0;
document.getElementById("balance").innerHTML = initiaBalance;

const balance = Number(document.getElementById("balance").innerHTML);

const handleLoan = () => {
  const userLoanInput = Number(prompt("Type in how much you wish to loan: "));

  if (userLoanInput <= balance * 2) {
    document.getElementById("loan").innerHTML = userLoanInput;
    document.getElementById("loanContainer").style.visibility = "visible";
    console.log("loan accepted");
  }
};

loanBtnElement.addEventListener("click", handleLoan);
