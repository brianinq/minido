import React from "react";

export default function Todo({ todo, onItemUpdate, onItemDelete }) {
  function doneHandler() {
    fetch(`http://localhost:8002/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: !todo.done,
      }),
    })
      .then((res) => res.json())
      .then((updatedItem) => onItemUpdate(updatedItem));
  }

  function handleDelete() {
    fetch(`http://localhost:8002/todos/${todo.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then(() => onItemDelete(todo));
  }

  return (
    <li className={todo.done ? "done" : ""}>
      <span>{todo.text}</span>
      <span className="category">{todo.category}</span>
      <button className="btn check" onClick={doneHandler}>
        {todo.done ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-check"></i>}
      </button>
      <button className="remove btn" onClick={handleDelete}>
        <i class="fa-solid fa-trash"></i>
      </button>
    </li>
  );
}
