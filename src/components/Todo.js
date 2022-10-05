import React from "react";

export default function Todo({ todo, onItemUpdate, onItemDelete }) {
  function doneHandler() {
    fetch(`http://localhost:8002/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !todo.done,
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
      <button className={todo.done ? "remove" : "add"} onClick={doneHandler}>
        {todo.done ? "Done" : "Incomplete"}
      </button>
      <button className="remove" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
