const foodTypeSelect = document.querySelector("#foodType");
foodTypeSelect.addEventListener("change", (event) => {
  const hideDetails = () => {
    document.getElementById("appetizers").classList.add("hidden");
    document.getElementById("main").classList.add("hidden");
    document.getElementById("desserts").classList.add("hidden");
  }

  const foodTypeSelectValue = event.target.value;
  if(foodTypeSelectValue === "appetizers") {
    //appetizers
    hideDetails();
    document.getElementById("appetizers").classList.remove("hidden");
  } else if (foodTypeSelectValue === "main") {
    //main
    hideDetails();
    document.getElementById("main").classList.remove("hidden");
  } else if(foodTypeSelectValue === "desserts") {
    //desserts
    hideDetails();
    document.getElementById("desserts").classList.remove("hidden");
  }
});