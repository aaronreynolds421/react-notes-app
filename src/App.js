import NoteList from "./components/NoteList";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "this is first note!", date: "15/04/2025" },
    { id: nanoid(), text: "this is second note!", date: "15/04/2025" },
    { id: nanoid(), text: "this is third note!", date: "15/04/2025" },
  ]);
  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
};
export default App;
