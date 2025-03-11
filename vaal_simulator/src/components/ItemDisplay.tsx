import { useState, useEffect } from "react";
import { Item, createDefaultItem } from "../types/Item";


export const ItemDisplay = () => {
  const [item, setItem] = useState<Item>();

async function loadDefaultItem(itemName: string) {
    const item = createDefaultItem(itemName);
    setItem(item);
}

function getFulltext(text: string, value: number) {
    return text.replace('CURRENT', value.toString());
}

  useEffect(() => {
    loadDefaultItem("Expert Feathered Sandals");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Item Display</h1>
      <h2>{item?.itemName}</h2>
      <div>
        {item?.prefixes.map((prefix, index) => (
          <div key={`prefix-${index}`}>
            {Array.isArray(prefix.value) 
              ? getFulltext(prefix.text, prefix.value[0]).replace('CURRENT', prefix.value[1].toString())
              : getFulltext(prefix.text, prefix.value)
            }
          </div>
        ))}
        {item?.suffixes.map((suffix, index) => (
          <div key={`suffix-${index}`}>
            {Array.isArray(suffix.value)
              ? getFulltext(suffix.text, suffix.value[0]).replace('CURRENT', suffix.value[1].toString()) 
              : getFulltext(suffix.text, suffix.value)
            }
          </div>
        ))}
      </div>
      
    </div>
  );
};
