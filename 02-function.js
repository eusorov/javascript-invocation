// Function Invocation

var currentBalance = 1000000000;

function pay(amount) {
  currentBalance -= amount;
  return currentBalance;
}

function getBalance() {
  return currentBalance;
}

console.log(getBalance());
pay(999999999);
console.log(getBalance());
