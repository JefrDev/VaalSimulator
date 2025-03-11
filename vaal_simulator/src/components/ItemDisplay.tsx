import { useState, useEffect } from "react";
import { Item } from "../types/Item";


export const ItemDisplay = () => {
  const [items, setItems] = useState<Item[]>([]);


  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/docs/itemformat.json');
      const data = await response.json();
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Item Display</h1>
    </div>
  );
};
