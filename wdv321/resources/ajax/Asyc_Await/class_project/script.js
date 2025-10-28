document.getElementById("contactForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const response = await fetch("products.php", {
    method: "POST",
    body: formData
  });

  const data = await response.json();
  document.querySelector("#output").textContent = JSON.stringify(data);

});