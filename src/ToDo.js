import React from 'react';
 
const ToDo = ({todo, markAsComplete}) => {
   return (
    <div className={todo.complete ? "strike" : ""}>
        {todo.id}{todo.task}
        <button onClick={() => markAsComplete(todo.id)}>Tamamla</button>
    </div>
   );
};
 
export default ToDo;