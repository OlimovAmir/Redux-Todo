import { useState } from 'react';
import './App.css';
const { v4: uuidv4 } = require('uuid');

function App() {

  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const id = uuidv4();
  const addTodo = () => {
    if (text.trim().length > 0) {
      setTodos([
        ...todos,
        {
          id: id,
          text: text,
          completed: false,
        }
      ])
      setText('');
    }
    

  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }

  return (
    <div className="App">
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo} >Add Todo</button>
      </label>

      <ul>
        {
          todos.map(todo => <li key={todo.id}>
            <input type='checkbox' />
            <span>{todo.text}</span>
            <span onClick={() => removeTodo(todo.id)} className='delete' >&times;</span>
          </li>)
        }
      </ul>

    </div>
  );
}

export default App;
