document.addEventListener("DOMContentLoaded", () => {
  // Step 2 - Populate createElement() and appendChild()
  let toppings = ["Pepperoni", "Sausage", "Mushrooms", "Onions"];
  let toppingSelect = document.getElementById("toppingSelect");

  toppings.forEach(function(topping) {
    let option = document.createElement("option");
    option.value = topping;
    option.textContent = topping;
    toppingSelect.appendChild(option);
  });

  // Step 3 - Dynamically add a new option
  document.getElementById("addToppingBtn").addEventListener("click", function() {
    let newToppingInput = document.getElementById("newTopping");
    let newTopping = newToppingInput.value.trim();

    if (newTopping === "") {
      alert("Please enter a topping name!");
      return;
    }

    let option = document.createElement("option");
    option.value = newTopping;
    option.textContent = newTopping;
    toppingSelect.appendChild(option);

    console.log("Added new topping:", newTopping);
    newToppingInput.value = "";
  });

  // STEP 4: Dynamically change all the options
  const meatToppings = ["Bacon", "Ham", "Chicken", "Salami"];

  document.getElementById("loadVeggieBtn").addEventListener("click", () => {
    loadToppings(["Spinach", "Olives", "Green Peppers", "Tomatoes"]);
  });

  document.getElementById("loadMeatBtn").addEventListener("click", function() {
      loadToppings(meatToppings);
  });

  function loadToppings(list) {
    // Remove old options first
    toppingSelect.innerHTML = "";

    // Add new options dynamically
    list.forEach(function(topping) {
        let option = document.createElement("option");
        option.value = topping;
        option.textContent = topping;
        toppingSelect.appendChild(option);
    });

    console.log("Updated toppings:", list);
  }
});

