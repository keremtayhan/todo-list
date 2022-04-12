import React, {useState, useEffect} from 'react';


import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css"; 
import './App.css';
import ToDoList from './ToDoList';

const Group = ({group, handleEkle, temizle, markAsComplete, markAsIncomplete}) => {
  const [text, setText] = useState('');
  
  useEffect(() => {
    document.title = group.label;
  },[group]);
  

  


  return (
    <>   
    
    
    <div>
    <h1> to-do list of "{group.label}"</h1>      
      <Button onClick={()=> handleEkle(text)}>Ekle</Button>
      <InputText value={text} onChange={e => setText(e.target.value)}/>

      <Button onClick={() => temizle()}>Yapilanlari Temizle</Button>
      <br/>

      <ToDoList toDoList = {group.items??[]} markAsComplete={markAsComplete} markAsIncomplete = {markAsIncomplete}/>
      <br/>
    </div>
    </>
  )

}
export default Group;