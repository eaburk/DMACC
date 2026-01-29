const genreSelect = document.querySelector("#genreSelect");

genreSelect.addEventListener("change", function () {
    // FIX #1: The hideAllGenres function must be CALLED with parentheses.
    // Original bug: hideAllGenres;  (function never executed)
    hideAllGenres();

    // FIX #2: Use .value to get the selected option from a <select>
    // Original bug: genreSelect.text
    const selectedGenre = genreSelect.value;

    // FIX #3: Use comparison (===), not assignment (=)
    // Original bug: if (selectedGenre = "rock")
    if (selectedGenre === "rock") {

        // FIX #4: Correct DOM selector
        // Original bug: document.querySelector("rock")
        document.getElementById("rock").classList.remove("hidden");
    }
    else if (selectedGenre === "pop") {
        document.getElementById("pop").classList.remove("hidden");
    }
    else if (selectedGenre === "jazz") {
        document.getElementById("jazz").classList.remove("hidden");
    }

    // FIX #5: Removed previousGenre logic entirely
    // Original bug: unnecessary state tracking caused the app
    // to fail after switching genres more than once
});

function hideAllGenres() {
    // This function correctly hides all genre sections
    document.getElementById("rock").classList.add("hidden");
    document.getElementById("pop").classList.add("hidden");
    document.getElementById("jazz").classList.add("hidden");
}