import React from 'react';

const Product = (todo) => {
    return (
        <div key={todo.id} className="todo">
          
        
        <p>{todo.text}</p>
     

        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        <button onClick={() => update(todo.id)}>update</button>

     
    </div>
    );
}

export default Product;
