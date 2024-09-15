import "./styles.css"

export default function App() {
  return <div className="main-container">
    <h2>ToDo List</h2>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">ITEM NAME</label>
          <div className="input-button-container">
            <input type="text" id="item" />
            <button className="btn">+</button>
          </div>
        </div>
      </form>
    </div>
}