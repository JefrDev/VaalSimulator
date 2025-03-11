import { useState, useEffect } from "react";
import { Item, createDefaultItem } from "../types/Item";


export const ItemDisplay = () => {
  const [item, setItem] = useState<Item>();


  const loadDefaultItem = async () => {
    const item = createDefaultItem("Expert Feathered Sandals");
    setItem(item);
};

  useEffect(() => {
    loadDefaultItem();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Item Display</h1>
      <h2>{item?.itemName}</h2>
      
    </div>
  );
};
