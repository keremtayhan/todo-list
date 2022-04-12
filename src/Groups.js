import React from 'react';
import Group from './Group';
import ToDoList from './ToDoList';
import { useEffect, useState } from "react"


const Groups = ({groups,markAsComplete,markAsIncomplete,handleEkle,temizle}) => {
    const [ toDoList, setToDoList ] = useState(JSON.parse(localStorage.getItem('toDoList'))??[]);
    const [ group, setGroup] = useState(JSON.parse(localStorage.getItem('group'))??[]);
    const [ text, setText ] = useState('');
    const [ groupText,setGroupText] = useState('');



    
    return (
       <div>
           
           {groups.map(group => {
               
               return (    
                   <Group key={group.label} group={group} markAsComplete = {markAsComplete}/>
               )
           })}
           
           
       </div>
   );
};
 
export default Groups;