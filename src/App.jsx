import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  return (
    <>
      <div className="main-container">
        <h2>ToDo List</h2>
          <form className="new-item-form">
            <div className="form-row">
              <label htmlFor="item">ITEM NAME</label>
              <div className="input-button-container">
                <input value={newItem} 
                  onChange={e => setNewItem(e.target.value)} 
                  type="text" 
                  id="item" 
                />
                <button className="btn">+</button>
              </div>
            </div>
          </form>
      </div>
      <h1 className="header">LIST</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}
