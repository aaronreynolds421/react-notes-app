import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const maxChars = 200;
  const [note, setNote] = useState("");
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSaveClick = () => {
    if (note.trim().length > 0) {
      handleAddNote(note);
      setNote(""); // optional: clear after saving
    }
  };
  return (
    <div className="note-container">
      <textarea
        value={note}
        onChange={handleChange}
        maxLength={maxChars}
        placeholder="Write your note..."
        className="text-area"
      />
      <div className="note-counter">
        {maxChars - note.length} characters remaining
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
