import { useState } from "react";
import { Item } from "../types/Item";


export const ItemDisplay = () => {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Item Display</h1>
    </div>
  );
};
