import React, { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import Filter from "./Filter";
import Todo from "./Todo";

export default function TodoList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  function handleAddTodo(newItem) {
    setTodos((todos) => [...todos, newItem]);
  }

  function handleUpdateItem(updatedItem) {
    const updatedItems = todos.map((item) => {
      return item.id === updatedItem.id ? updatedItem : item;
    });
    setTodos(updatedItems);
  }
  function handleDeleteItem(deletedItem) {
    const updatedItems = todos.filter((item) => item.id !== deletedItem.id);
    setTodos(updatedItems);
  }

  //TODO
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const todosToDisplay = todos.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="todoList">
      <div className="header">Your Tasks Today</div>
      <CreateTodo onAddItem={handleAddTodo} />
      <Filter category={selectedCategory} onCategoryChange={handleCategoryChange} />
      <ul className="todos">
        {todosToDisplay.map((todo) => (
          <Todo key={todo.id} todo={todo} onUpdateItem={handleUpdateItem} onItemDelete={handleDeleteItem} />
        ))}
      </ul>
    </div>
  );
}
