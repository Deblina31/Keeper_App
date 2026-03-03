import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArr, setnotesArr] = useState([]);
  function addNote(newNote) {
    //let note = { title: data.title, content: data.content };
    setnotesArr((prevState) => {
      return [...prevState, newNote];
    });
  }
  function handleDelete(id) {
    setnotesArr((prevState) => {
      return prevState.filter((item, index) => {
        return index != id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesArr.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteItem={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
