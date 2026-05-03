class BankAccount {
  constructor(inBalance) {
    this.accountBalance = 0;
    this._accountTransactions = [];
    this.createAccountTransaction("D", inBalance);
  }

  get accountNumber() {
    return this._accountNumber;
  }

  set accountNumber(value) {
    this._accountNumber = value;
  }

  get accountTransactions() {
    return this._accountTransactions;
  }

  createAccountTransaction(type, amount) {
    const transaction = {
      type: type,
      amount: amount,
      date: new Date()
    }
    this._accountTransactions.push(transaction);
    if(type === "D") {
      this.accountBalance += amount;
    } else {
      this.accountBalance -= amount;
    }
  }

  deposit(inDepositAmount) {
    this.createAccountTransaction("D", inDepositAmount);
  }

  withdraw(inWithdrawAmount) {
    this.createAccountTransaction("W", inWithdrawAmount);
  }

  balance() {
    return this.accountBalance;
  }
}