import { useState, useEffect } from "react";
import { Item, createDefaultItem } from "../types/Item";


export const ItemDisplay = () => {
  const [item, setItem] = useState<Item>();

async function loadDefaultItem(itemName: string) {
    const item = createDefaultItem(itemName);
    setItem(item);
}


  useEffect(() => {
    loadDefaultItem("Expert Feathered Sandals");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Item Display</h1>
      <h2>{item?.itemName}</h2>
      
    </div>
  );
};
