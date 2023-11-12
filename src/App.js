import { useState } from 'react';
import './App.css';
const { v4: uuidv4 } = require('uuid');

function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const ID = uuidv4();
  const addTodo = ()=>{
    if (text.trim().length) {
      
      setText([
        ...todos,
        {
          id: ID,
        } 

      ])
      setText('');
    }

    
  }

  return (
    <div className="App">
      <label>
        <input value={text} onChange={(e)=> setText(e.target.value)} />
        <button onClick={addTodo} >Add Todo</button>
      </label>
    </div>
  );
}

export default App;
