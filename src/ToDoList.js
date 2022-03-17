import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList, markAsComplete}) => {
   
    
    return (
       <div>
           
           {toDoList.map(todo => {
               
               return (    
                   <ToDo todo={todo} markAsComplete={markAsComplete}/>
                   
               )
           })}
           
           
       </div>
   );
};
 
export default ToDoList;