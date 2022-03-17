import { useEffect, useState } from "react"
import Header from './Header';
import ToDoList from "./ToDoList";
import './App.css';


function App() {

  const [ toDoList, setToDoList ] = useState(JSON.parse(localStorage.getItem('toDoList'))??[]);
  const [ text, setText ] = useState('');
  const [ count, setCount ] = useState(parseInt(localStorage.getItem('count'))??0);
  var theListe = [...toDoList];


  useEffect(() => {
    localStorage.setItem('toDoList',JSON.stringify(toDoList));
    localStorage.setItem('count',count);    
    document.title = `${count} adet task `;
  },[count]);

  /*const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }*/
  
  function markAsComplete(id) {
    const newToDoList = [...toDoList];
    const index = newToDoList.findIndex(val => val.id === id);
    newToDoList[index] = {...newToDoList[index], complete: true};
    setToDoList(newToDoList);

  }

   function handleEkle() {
    setCount(count+1);
    const newToDoList = [...toDoList];
    newToDoList.push({task: text, id: count});
    setToDoList(newToDoList);
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
    <div className="App">
      <div className ="App-header">
      <Header>Todo Gir:</Header>      
      <input  value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={handleEkle}>Ekle</button>
      
      <button onClick={temizle}>Yapilanlari Temizle</button>
      <br/>
      <ToDoList toDoList = {toDoList} markAsComplete={markAsComplete} />
      <br/>
      </div>
    </div>
  );
}

export default App;
