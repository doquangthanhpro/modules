import React, { useState } from "react";
import "./style.css";

const Products = () => {
   
  const [todos, setTodos] = React.useState(() => {
     const bien = JSON.parse( localStorage.getItem('jos'))
      
      return bien ?? []
  });
  const [todo, setTodo] = React.useState("");
   const [edit, setedit] = useState('');

  console.log();
  function handleSubmit(e) {
 

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos((todos) => {
        const item = todos.concat(newTodo)
     localStorage.setItem('jobs' , JSON.stringify(item));
          
             return item;
          
    });

    setTodo("");
  }

  function deleteTodo(id) {
     console.log(id);
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    console.log(updatedTodos); 
  }

   function update(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = edit;
      }
      return todo;        
    }); 
    setTodos(updatedTodos);
  
   }


  return (
    <div id="todo-list">
      <h1>Todo List</h1>
     
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button  onClick={  handleSubmit}>Add Todo</button>

      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          
        
            <p>{todo.text}</p>
         

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => update(todo.id)}>update</button>

         
        </div>
      ))}
       <input type="text" value={edit} onChange={(e) => setedit(e.target.value) } />
    </div>
  );
};

export default Products;