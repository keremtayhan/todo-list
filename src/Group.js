import React from 'react';
import { Button } from 'primereact/button';
import ToDoList from './ToDoList';
const Group = ({group}) => {
   const [ toDoList, setToDoList ] = useState(JSON.parse(localStorage.getItem('toDoList'))??[]);
   const [ text, setText ] = useState('');
   useEffect(() => {
      localStorage.setItem('toDoList',JSON.stringify(toDoList));
      document.title = `${toDoList.length} adet task`;
      localStorage.setItem('toDoList',JSON.stringify(toDoList));
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
  
     function groupEkle(){
       const newGroup = [...group];
       newGroup.push({name : groupText});
       setGroup(newGroup);
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
      <div className={group.complete ? "strike" : ""}>
      {group.id}  <Button onClick={showGroup}>{group.name}</Button>
      </div>
   );
};
 
export default Group;