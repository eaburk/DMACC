const genreSelect = document.querySelector("genreSelect");
let previousGenre = "";

genreSelect.addEventListener("click", function () {

    hideAllGenres;

    let selectedGenre = genreSelect.value;

    if (previousGenre !== selectedGenre) {

        if (selectedGenre = "rock") {
            document.querySelector("rock").classList.remove("hidden");
        }
        else if (selectedGenre = "pop") {
            document.querySelector("pop").classList.remove("hidden");
        }
        else if (selectedGenre = "jazz") {
            document.querySelector("jazz").classList.remove("hidden");
        }

        previousGenre = selectedGenre;
    }
});

function hideAllGenres() {
    document.getElementById("rock").classList.add("hidden");
    document.getElementById("pop").classList.add("hidden");
    document.getElementById("jazz").classList.add("hidden");
}