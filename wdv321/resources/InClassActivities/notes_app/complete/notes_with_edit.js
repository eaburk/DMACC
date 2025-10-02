document.addEventListener("DOMContentLoaded", () => {
  const noteInput = document.getElementById("noteInput");
  const addNoteBtn = document.getElementById("addNoteBtn");
  const notesDiv = document.getElementById("notes");

  // Load notes from localStorage or empty array
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
  }

  function renderError(msg) {
    const errorMessagesDiv = document.getElementById("errorMessages");
    errorMessagesDiv.textContent = msg;
    setTimeout(() => {
      errorMessagesDiv.textContent = "";
    }, 5000);
  }

  function renderNotes() {
    notesDiv.innerHTML = "";
    notes.forEach((note, index) => {
      const noteEl = document.createElement("div");
      noteEl.classList.add("note");

      // display span for note text
      const noteTextDiv = document.createElement("div");
      noteTextDiv.textContent = note.text;
      noteTextDiv.classList.add("notesContainer");

      const createdSpan = document.createElement("span");
      createdSpan.classList.add("timestampSpan");
      createdSpan.textContent = `Created: ${formatDate(note.createdAt)}`;

      const updatedSpan = document.createElement("span");
      updatedSpan.classList.add("timestampSpan");
      updatedSpan.textContent = `Updated: ${formatDate(note.updatedAt)}`;

      // edit input (hidden initially)
      const editInput = document.createElement("input");
      editInput.classList.add("notesContainer", "notesEditInput", "hidden");
      editInput.type = "text";
      editInput.value = note.text;

      // Cancel edit button
      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "Cancel";
      cancelBtn.classList.add("cancelBtn", "hidden", "button");
      cancelBtn.addEventListener("click", () => {
        renderNotes(); // re-render is less efficient but also less code to handle resetting everything
      });

      // Edit button
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.classList.add("editBtn", "button");
      editBtn.addEventListener("click", () => {
        if (editInput.classList.contains("hidden")) {
          // Switch to edit mode
          noteTextDiv.classList.add("hidden");
          editInput.classList.remove("hidden");
          editInput.focus();
          editBtn.textContent = "Save";
          cancelBtn.classList.remove("hidden");
          deleteBtn.classList.add("hidden");
        } else {
          // Save edited note
          renderError("");
          const newText = editInput.value.trim();
          if (newText) {
            notes[index].text = newText;
            notes[index].updatedAt = new Date().toISOString();
            localStorage.setItem("notes", JSON.stringify(notes));
            renderNotes();
          } else {
            renderError("Please enter a message to save the note.");
          }
        }
      });

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("deleteBtn", "button");
      deleteBtn.addEventListener("click", () => {
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes();
      });

      noteEl.appendChild(noteTextDiv);
      noteEl.appendChild(editInput);
      noteEl.appendChild(editBtn);
      noteEl.appendChild(deleteBtn);
      noteEl.appendChild(cancelBtn);
      noteEl.appendChild(createdSpan);
      noteEl.appendChild(updatedSpan);
      notesDiv.appendChild(noteEl);
    });
  }

  addNoteBtn.addEventListener("click", () => {
    renderError("");

    const noteText = noteInput.value.trim();
    if (noteText) {
      const now = new Date().toISOString();
      notes.push({
        text: noteText,
        createdAt: now,
        updatedAt: now
      });
      localStorage.setItem("notes", JSON.stringify(notes));
      renderNotes();
      noteInput.value = "";
    } else {
      renderError("Please enter a message to add a note.");
    }
  });

  // Render existing notes on load
  renderNotes();
});
