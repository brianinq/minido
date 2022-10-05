import React, { useState } from "react";

export default function CreateNote({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  return (
    <form
      className={"form"}
      onSubmit={(e) => {
        e.preventDefault();
        addNote(note);
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <label htmlFor="title">Enter note title:</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={(e) => {
          setNote((note) => ({ ...note, title: e.target.value }));
        }}
      />
      <label htmlFor="content">Type out your notes: </label>
      <textarea
        name="content"
        id="content"
        cols="40"
        rows="15"
        onChange={(e) => {
          setNote((note) => ({ ...note, content: e.target.value }));
        }}
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
}
