const AddNote = () => {
  return (
    <div className="new note">
      <textarea rows="8" cols="10" placeholder="Type to add a note"></textarea>
      <div className="note-footer">
      <textarea id="myTextarea" maxlength="100"></textarea>
<div id="charCount">100 characters remaining</div>

<script>
  const textarea = document.getElementById('myTextarea');
  const charCount = document.getElementById('charCount');
  const maxLength = parseInt(textarea.getAttribute('maxlength'), 10);

  textarea.addEventListener('input', function() {
    const currentLength = textarea.value.length;
    const remainingChars = maxLength - currentLength;
    charCount.textContent = remainingChars + ' characters remaining'; // <- changed this
  });
</script>


        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default AddNote;
