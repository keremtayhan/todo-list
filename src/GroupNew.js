import { useEffect, useState } from "react";
import ToDoList from "./ToDoList";


export default function GroupNew({ group }) {

  return (
    <>   
    <h1>{group.label}{group.id}</h1>
    </>
  );

}