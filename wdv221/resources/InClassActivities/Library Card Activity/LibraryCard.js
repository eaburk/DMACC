class LibraryCard {
  constructor(initialFees) {
    // TODO: create backing properties for member name, card number, fees,
    // and an empty activity array.
  }

  // TODO: Create get and set methods for memberName.
  // TODO: Create get and set methods for cardNumber.
  // TODO: Create get and set methods for fees.
  // TODO: Create get and set methods for activity.

  addFee(amount) {
    // TODO: add amount to the fees balance.
    // TODO: add an object literal to the activity array with:
    // type: "F", amount: amount, date: this.formatDate().
  }

  makePayment(amount) {
    // TODO: subtract amount from the fees balance.
    // TODO: add an object literal with type "P" to the activity array.
  }

  currentFees() {
    // TODO: return the current fees balance.
  }

  cardInfo() {
    // TODO: return member name, card number, and fees as an array.
  }

  formatDate() {
    // TODO: create a Date object and return mm/dd/yyyy.
  }
}
