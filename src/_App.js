import { useEffect, useState } from "react"
import Header from './Header';
import ToDoList from "./ToDoList";
import Groups from "./Group";
import './App.css';


import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { SelectButton } from 'primereact/selectbutton';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css


function App() {
  const [ toDoList, setToDoList ] = useState(JSON.parse(localStorage.getItem('toDoList'))??[]);
  const [ text, setText ] = useState('');
  const [ groupText,setGroupText] = useState('');
  const [ groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups'))??[]);
  

  useEffect(() => {
    localStorage.setItem('toDoList',JSON.stringify(toDoList));
    document.title = `${toDoList.length} adet task`;
    localStorage.setItem('groups',JSON.stringify(groups));
  },[toDoList]);
  

/*const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }*/
  function markAsIncomplete(id) {
    const newToDoList = [...toDoList];
    const index = newToDoList.findIndex(val => val.id === id);
    newToDoList[index] = {...newToDoList[index], complete: false};
    setToDoList(newToDoList);
  }
  function markAsComplete(id) {
    const newToDoList = [...toDoList];
    const index = newToDoList.findIndex(val => val.id === id);
    newToDoList[index] = {...newToDoList[index], complete: true};
    setToDoList(newToDoList);
  }


   function handleEkle() {
    const maxId = toDoList[toDoList.length-1]?.id ?? 0;
    const newToDoList = [...toDoList];
    newToDoList.push({task: text, id: maxId + 1, ulke: text});
    setToDoList(newToDoList);
    setText('');
  }

   function showGroup(){
     
   }  
   function groupEkle(){
     const newGroups = [...groups];
     newGroups.push({name : groupText});
     setGroups(newGroups);
     setText('');
   }

  function temizle() {
    const newToDoList = [...toDoList];
    for(let i = newToDoList.length-1;i>=0;i--){
      if(newToDoList[i].complete === true){
        newToDoList.splice(i,1); 
      }
    }
    setToDoList(newToDoList);
    setText('');
  }

  return (
      <div>
      
      <div className="App">
      <div class="tab">
        <div className="tab.button">
      
      
      <Button onClick={groupEkle}>Grup Ekleyin</Button>
      
        </div>
      </div>
      
      <div className ="App-header">
      
      <InputText value={groupText} onChange={e => setGroupText(e.target.value)}/>
      <Header>Todo Gir:</Header>      
      <Button onClick={handleEkle}>Ekle</Button>
      <InputText value={text} onChange={e => setText(e.target.value)}/>

      <Button onClick={temizle}>Yapilanlari Temizle</Button>
      <br/>
      <ToDoList toDoList = {toDoList} markAsComplete={markAsComplete} markAsIncomplete = {markAsIncomplete}/>
      <br/>
  
      </div>
    </div>
    </div>

  );
}

export default App;
