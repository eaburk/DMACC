const sbm = document.getElementById("submit");
const nme = document.getElementById("name");

sbm.addEventListener("click", () => {
  localStorage.setItem("name", nme.value);
  console.log('ls: ', JSON.stringify(localStorage));
  console.log("From LS: ", localStorage.name);
});