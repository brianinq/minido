import React, { useState } from "react";

export default function CreateTodo({ onAddItem }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("General");

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      text: text,
      category: category,
      done: false,
    };
    fetch("http://localhost:8002/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((newItem) => onAddItem(newItem));
    setText("");
    setCategory("General");
  }

  return (
    <form className="newItem" onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" name="name" value={text} onChange={(e) => setText(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Code">Code</option>
          <option value="Leisure">Leisure</option>
          <option value="Family">Family</option>
        </select>
      </label>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
