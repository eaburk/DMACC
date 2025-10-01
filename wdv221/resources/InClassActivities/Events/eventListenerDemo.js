document.querySelector("button").addEventListener("click", (event) => {
  console.log('Button was clicked!');
  event.stopPropagation();
});

document.body.addEventListener("click", () => {
  console.log('Document body was clicked!');
});

document.body.onload = () => {
  console.log("body onload");
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded");
});