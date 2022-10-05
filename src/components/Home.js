import React from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import { useNavigate } from "react-router-dom";

export default function Home({ notes, setNotes, create }) {
  const history = useNavigate();

  function addNote(note) {
    fetch("http://localhost:8002/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    })
      .then((res) => res.json())
      .then((newItem) => {
        setNotes([note, ...notes]);
        history("/");
      });
  }

  return (
    <main>
      <div
        style={{
          display: create ? "" : "none",
        }}
        className="nodal"
        onClick={() => history("/")}
      >
        <CreateNote addNote={addNote} />
      </div>
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
    </main>
  );
}
