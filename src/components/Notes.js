import { MdDeleteForever } from "react-icons/md";
const Notes = () => {
  return (
    <div className="note">
      <span> Hello! This is our first note! Hurray!</span>
      <div className="note-footer">
        <small>13/04/20</small>
        <MdDeleteForever className="delete-icon" size="1.3em"/>
      </div>
    </div>
  );
};

export default Notes;
