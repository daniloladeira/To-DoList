import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <div className="main-container">
        <h2>ToDo List</h2>
        <form className="new-item-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="item">ITEM NAME</label>
            <div className="input-button-container">
              <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                type="text"
                id="item"
              />
              <button className="btn" type="submit">+</button>
            </div>
          </div>
        </form>
      </div>
      <h1 className="header">LIST</h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} 
                onChange={e => toggleTodo(todo.id, e.target.checked)} />
                {todo.title}
              </label>
              <button 
              onClick={() => deleteTodo(todo.id)} 
              className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
