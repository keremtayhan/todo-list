import React from 'react';
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import ToDoList from './ToDoList';
const Group = ({group}) => {
   return (
      <div className={group.complete ? "strike" : ""}>
      {group.id}.  <Button>{group.name}</Button>;
      </div>
   );
};
 
export default Group;