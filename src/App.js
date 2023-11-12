import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = ()=>{
    if (text.trim().length) {
      
      setText([
        ...todos,
        {
          id: '',
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
