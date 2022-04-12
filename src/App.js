import { useEffect, useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import Group from "./Group";
import "primereact/resources/primereact.min.css"; //core css
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import './App.css';
import { ToggleButton } from 'primereact/togglebutton';

export default function App() {
  const [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')??[
    {label: "default_group", toDoList : []}
  ]));
  const [activeIndex, setActiveIndex] = useState(0);
  const [ text, setText ] = useState('group');
  console.log("activeIndex", activeIndex);
  console.log("groups.length", groups.length);
  
  useEffect(() => {
    localStorage.setItem('groups',JSON.stringify(groups));
  },[groups]);

  function groupEkle(){
    const newGroups = [...groups];
    newGroups.push({label : text});
    setGroups(newGroups);
    setText('');
  }

  
  function handleEkle(text) {
    const items = groups[activeIndex].items ?? [];
    const maxId = items[items.length-1]?.id ?? 0;
    const newItems = [...items];
    newItems.push({task: text, id: maxId + 1, complete : false});
    const newGroups = groups.map((group,index)=>{
      if(index === activeIndex){
        const newGroup = {...group};
        newGroup.items = newItems;
        return newGroup; 
      }
      
      else{
        return group;
      }
    });
    console.log("newGroups",newGroups);
    setText('');
    setGroups(newGroups);
  
  }

  function markAsIncomplete(id) {
    const newItems = groups[activeIndex].items ?? [];
    const index = newItems.findIndex(val => val.id === id);
    newItems[index] = {...newItems[index], complete: false};
    console.log("heyyyy");
    
    const newGroups = [...groups];
    newGroups[activeIndex].items = newItems;
    console.log("newGroups",newGroups);

    setGroups(newGroups);
  }

  function markAsComplete(id){
    const newItems = groups[activeIndex].items ?? [];
    const index = newItems.findIndex(val => val.id === id);
    if(newItems[index].complete === false){
    newItems[index] = {...newItems[index], complete: true};
    }
    else{
    newItems[index] = {...newItems[index], complete: false};
    }
    console.log("heyyyy");
    
    const newGroups = [...groups];
    newGroups[activeIndex].items = newItems;
    console.log("newGroups",newGroups);

    setGroups(newGroups);
  }


  function temizle() {
    const items = groups[activeIndex].items ?? [];
    const maxId = items[items.length-1]?.id ?? 0;
    const newItems = [...items];
    for(let i = newItems.length-1;i>=0;i--){
      if(newItems[i].complete === true){
        newItems.splice(i,1); 
      }
    }
    const newGroups = [...groups];
    newGroups[activeIndex].items = newItems;

    console.log("newGroups",newGroups);

    setGroups(newGroups);
  }

  function isimDegis(){
    
      const newGroups = [...groups];

      newGroups[activeIndex].label = text;
      
      setGroups(newGroups);
      setText('');
  }

  function groupSil(){
    if(groups.length>1){
      const newGroups = [...groups];
      newGroups.splice(activeIndex,1);
      console.log("activeIndex", groups[activeIndex].label);
      setGroups(newGroups);
      setText('');
      console.log("groups.length", groups.length);
    }
    else{
      const newGroups = [...groups];
      newGroups.pop();
      setGroups(newGroups);
      setText('');
    }
  }

  return (
    <div>
      <TabMenu
        model={groups}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      />
      <div>
      <InputText value={text} onChange={e => setText(e.target.value)}/>
      <Button onClick={groupEkle}>Group Ekle</Button>
      <Button onClick={isimDegis}>Group Ismi Degistir</Button>
      <Button onClick={groupSil}>Group sil</Button>
      <Group group={groups[activeIndex]} handleEkle={handleEkle} markAsComplete={markAsComplete} markAsIncomplete = {markAsIncomplete} temizle = {temizle}/>
    </div>
    </div>
  );
}
