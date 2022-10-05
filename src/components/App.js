import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import TodoList from "./TodoList";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8002/notes`)
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
