document.addEventListener("DOMContentLoaded", () => {
  // Populate createElement() and appendChild()
  let toppings = ["Pepperoni", "Sausage", "Mushrooms", "Onions"];
  let elementSelect = document.getElementById("toppingSelect");

  toppings.forEach(function (topping) {
    let option = document.createElement("option");
    option.value = topping;
    option.textContent = topping;
    elementSelect.appendChild(option);
  });

  // Dynamically add a new option
  document.getElementById("addToppingBtn").addEventListener("click", function () {
    let newToppingInput = document.getElementById("newTopping");
    let newTopping = newToppingInput.value.trim();

    if (newTopping === "") {
      alert("Please enter a topping name!");
      return;
    }

    let option = document.createElement("option");
    option.value = newTopping;
    option.textContent = newTopping;
    elementSelect.appendChild(option);

    console.log("Added new topping:", newTopping);
    newToppingInput.value = "";
  });

  // --- STEP 4: Dynamically change all the options ---
  const meatToppings = ["Bacon", "Ham", "Chicken", "Salami"];

  document.getElementById("loadMeatBtn").addEventListener("click", function () {
    loadToppings(meatToppings);
  });

  function loadToppings(list) {
    // Remove old options first
    elementSelect.innerHTML = "";

    // Add new options dynamically
    list.forEach(function (topping) {
      let option = document.createElement("option");
      option.value = topping;
      option.textContent = topping;
      elementSelect.appendChild(option);
    });

    console.log("Updated toppings:", list);
  }
});