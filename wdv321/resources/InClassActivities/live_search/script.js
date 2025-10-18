let timeout = null;
document.getElementById("searchBox").addEventListener("input", (event) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    fetch(`students.php?q=${event.target.value}`)
      .then(response => response.json())
      .then(students => {
        students.forEach(student => {
          const p = document.createElement("p");
          p.innerText = student.name;
          document.getElementById("results").append(p);
        });
      });
  }, 300);
});