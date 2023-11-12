import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
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

  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo;
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
      )
    )
  }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTodo}/>
      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
