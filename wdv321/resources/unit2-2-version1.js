const foodTypeSelect = document.querySelector("#foodType");
foodTypeSelect.addEventListener("change", (event) => {
  const hideDetails = () => {
    document.getElementById("appetizers").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("desserts").style.display = "none";
  }

  const foodTypeSelectValue = event.target.value;
  if(foodTypeSelectValue === "appetizers") {
    //appetizers
    hideDetails();
    document.getElementById("appetizers").style.display = "block";
  } else if (foodTypeSelectValue === "main") {
    //main
    hideDetails();
    document.getElementById("main").style.display = "block";
  } else if(foodTypeSelectValue === "desserts") {
    //desserts
    hideDetails();
    document.getElementById("desserts").style.display = "block";
  }
});