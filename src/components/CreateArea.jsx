import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
// import { Fab } from "@mui/material";
// import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { value, name } = event.target;
    setNote((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.onAdd(note); //puro obj ta pass hobe
    setNote({ title: "", content: "" });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
