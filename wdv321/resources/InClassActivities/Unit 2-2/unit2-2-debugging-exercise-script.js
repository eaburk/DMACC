const genreSelect = document.querySelector("#genreSelect");

genreSelect.addEventListener("click", function(e) {

    hideAllGenres;

    const selectedGenre = genreSelect.text;

    if (selectedGenre = "rock") {
        document.querySelector("rock").classList.remove("hidden");
    } else if (selectedGenre === "pop") {
        document.getElementById("pop").classList.remove("hidden");
    } else if (selectedGenre === "jazz") {
        document.getElementById("jazz").classList.remove("hidden");
    }
});

function hideAllGenres() {
    document.getElementById("rock").classList.add("hidden");
    document.getElementById("pop").classList.add("hidden");
    document.getElementById("jazz").classList.add("hidden");
}
