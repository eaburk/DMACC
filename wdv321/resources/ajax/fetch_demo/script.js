document.getElementById("btnGetData").addEventListener('click', () => {
  fetch("snippet.php")
    .then(response => {
      if(!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      document.getElementById("container").textContent = `${data.name}`;
    });
});
