let formatter = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD"
});

function validateAmt(amt) {
  if (!isNaN(amt)) {
    if (amt > 0.00) {
          return amt
      }
      else if (amt === 0) {
        alert("ERROR:  You must enter an amount greater than 0")
        return -1
      }
      else {
          alert("ERROR:  Balance must be a positive number.")
          return -1;
      }
  } else {
      alert("ERROR:  Balance must be a number, including the decimal point (1.00).");
      return -1;
  }
}

function openAccount() {
  let checkInput = -1
  while ( checkInput < 0) {
    balance = prompt("Welcome to our banking app! Please enter your starting balance.") * 1.00
    checkInput = validateAmt(balance)
  }
  return balance
}

function makeDeposit() {
  let checkInput = -1
  while (checkInput < 0 ) {
    depAmt = prompt("How much would you like to deposit?") * 1.00
    checkInput = validateAmt(depAmt)
  }
  return depAmt
}

function makeWithdrawl() {
  let checkInput = -1
  while (checkInput < 0 ) {
    wdlAmt = prompt("How much would you like to withdraw?") * 1.00
    checkInput = validateAmt(wdlAmt)
    if (checkInput > 0) {
      if (balance >= wdlAmt) {
        checkInput = wdlAmt
      }
      else {
        alert(`Withdrawl amount ($${wdlAmt}) is larger than your account balance of $${balance}.`);
        checkInput = -1;
      }
    }
  }
  return wdlAmt
}

function main() {
  let balance = openAccount()
  let prettyBalance = formatter.format(balance)
  console.log(`Great! Your account has been opened. Your bank account has a balance of ${prettyBalance}.`)
  if (confirm('Would you like to make a deposit at this time?')) {
    let depAmt = makeDeposit();
    balance = balance + depAmt
    prettyBalance = formatter.format(balance)
    prettyDep = formatter.format(depAmt)
    console.log(`We are adding ${prettyDep} to your account`)
    console.log(`Your balance is now ${prettyBalance}.`)
  }
  if (confirm('Would you like to make a withdrawl at this time?')) {
    let wdlAmt = makeWithdrawl();
    balance = balance - wdlAmt
    prettyBalance = formatter.format(balance)
    prettyWdl = formatter.format(wdlAmt)
    console.log(`We are subtracting ${prettyWdl} from your account`)
    console.log(`Your balance is now ${prettyBalance}.`)
  }
  console.log(`\nYour final balance is now ${prettyBalance}.`)
}

main()