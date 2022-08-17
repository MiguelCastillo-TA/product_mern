import logo from './logo.svg';
import './App.css';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('SUBMITTING PRODUCT FORM')
  }

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <form onSubmit={handleSubmit}>
        <label className="label-input-wrp">
          Title 
          <input type="text" />
        </label>
        <label className="label-input-wrp">
          Price
          <input type="number" />
        </label>
        <label className="label-input-wrp">
          Description
          <input type="text" />
        </label>
        <button>Create</button>
      </form>
    </div>
  );
}

export default App;
