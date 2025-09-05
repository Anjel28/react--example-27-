import React, { useState } from 'react';
import { Todo } from './type';

const App:React.FC=()=>{
  const [todos, setTodos] = useState<Todo[]>([]);

  //Add function

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]); // Add new todo to the existing list
  };
 //toggle function
 const toggleTodo = (id: number) =>{
  setTodos(
    todos.map(todo =>
      todo.id === id? {...todo,completed: !todo.completed}: todo
    )
  )
 }
 //Delete function
 const deleteTodo = (id: number)=>{
  setTodos(todos.filter(todo => todo.id !==id));
 }
 return(
  <div>
    <h1>My To-DoList</h1>
    <form onSubmit={e=>{
      e.preventDefault();
      const input = e.currentTarget.elements.namedItem('todo-input') as HTMLInputElement;
      addTodo(input.value);
      input.value= '  ';
    }}>

    <input name="todo-input" type="text" placeholder="Add a new to-do"/>
    <button type="submit">Add</button>
    </form>
    <ul>
      {todos.map(todo =>(
        <li key={todo.id} style={{textDecoration:todo.completed? 'line-through': 'none'}}>
          <span onClick={()=> toggleTodo(todo.id)}>{todo.text}</span>
          <button onClick={()=> deleteTodo(todo.id)}>Delete</button>

        </li>
      ))}
    </ul>
  </div>
 )
}

export default App;