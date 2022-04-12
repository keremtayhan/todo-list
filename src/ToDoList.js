import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList, markAsComplete, markAsIncomplete}) => {
   
    
    return (
       <div>
           
           {toDoList.map(todo => {
               
               return (    
                   <ToDo key={todo.id} todo={todo} complete={todo.complete} markAsComplete={markAsComplete} markAsIncomplete={markAsIncomplete}/>
               )
           })}
           
           
       </div>
   );
};
 
export default ToDoList;