import React, { useState } from "react";

const AddNote = () => {
  const maxChars = 200;
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    setNote(e.target.value);
  };
  return (
    <div style={styles.container}>
      <textarea
        value={note}
        onChange={handleChange}
        maxLength={maxChars}
        placeholder="Write your note..."
        style={styles.textarea}
      />
      <div style={styles.counter}>
        {maxChars - note.length} characters remaining
      </div>
    </div>
  );
};
const styles = {
  container: {
    width: "100%",
    maxWidth: "400px",
    margin: "20px auto",
    fontFamily: "sans-serif",
  },
  textarea: {
    width: "100%",
    minHeight: "170px",
    borderRadius: "10px",
    padding: "1rem",
    fontSize: "16px",
    border: "none",
    backgroundColor: "#fef68a",
  },
  counter: {
    textAlign: "right",
    fontSize: "14px",
    color: "#666",
    marginTop: "5px",
  },
};

export default AddNote;
