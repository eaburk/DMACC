document.getElementById("btnWelcome").onclick = () => {
  alert('Welcome to JS');
}

document.getElementById("myParagraph").onclick = (event) => {
  event.target.textContent = "Changed my paragraph";
}

document.querySelector("img").onmouseover = (event) => {
  event.target.src = "images/koala_banner.jpg";
};

document.querySelector("img").onmouseout = (event) => {
  event.target.src = "images/koalas.jpg";
};