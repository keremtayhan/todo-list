import React from 'react';
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
 
const ToDo = ({todo, markAsComplete, markAsIncomplete}) => {
   return (
    <div className={todo.complete ? "strike" : ""}>
        {todo.id}.  <Button>{todo.task}</Button>
        <ToggleButton
        style={{width : '200px'}}
        onLabel='Done with this task'
        offLabel='Do this task'
        onIcon='pi pi-check'
   	  offIcon=''
		  checked={todo.complete}
		  onChange={e =>markAsComplete(todo.id)} 
        />     
        </div>
   );
};
 
export default ToDo;