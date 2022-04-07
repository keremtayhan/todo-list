import { useEffect, useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import GroupNew from "./GroupNew";
import "primereact/resources/primereact.min.css"; //core css
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme

export default function App() {
  const [groups, setGroups] = useState([
    { label: "Grup-1", items: [] },
    { label: "Grup-2", items: [] },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  console.log("activeIndex", activeIndex);

  return (
    <>
      <TabMenu
        model={groups}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      />

      <GroupNew group={groups[activeIndex]} />
    </>
  );
}
