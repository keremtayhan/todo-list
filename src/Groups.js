import React from 'react';
import Group from './Group';
import ToDoList from './ToDoList';

const Groups = ({groups,markAsComplete}) => {

    return (
       <div>
           
           {groups.map(group => {
               
               return (    
                   <Group key={group.id} group={group} markAsComplete = {markAsComplete}/>
               )
           })}
           
           
       </div>
   );
};
 
export default Groups;