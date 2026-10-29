const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");

const renderNotes = () => {
  let existingNotes = JSON.parse(localStorage.getItem("notes")) || [];

  const notesOutput = document.getElementById("notes");
  notesOutput.innerHTML = "";

  existingNotes.forEach((note) => {
    const p = document.createElement("p");
    p.textContent = note.noteText;

    notesOutput.appendChild(p);
  });
}

renderNotes();

addNoteBtn.addEventListener("click", () => {
  const noteText = noteInput.value;
  let existingNotes = JSON.parse(localStorage.getItem("notes")) || [];

  existingNotes.push({
    noteText: noteText
  });

  localStorage.setItem("notes", JSON.stringify(existingNotes));

  noteInput.value = "";
  noteInput.focus();

  renderNotes();
});