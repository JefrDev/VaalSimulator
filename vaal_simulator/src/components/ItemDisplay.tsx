import { useState, useEffect } from "react";
import { Item, createDefaultItem } from "../types/Item";


export const ItemDisplay = () => {
  const [item, setItem] = useState<Item>();

async function loadDefaultItem(itemName: string) {
    const item = createDefaultItem(itemName);
    setItem(item);
}

function getFulltext(text: string, value1: number, value2?: number) {
  if (value2) {
    return text.replace('CURRENT', value1.toString()).replace('CURRENT2', value2.toString());
  }
  
    return text.replace('CURRENT', value1.toString());
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
            {/* If value is an array, it means its a hybrid affix and should be treated slightly differently */}
            {Array.isArray(prefix.value) 
              ? getFulltext(prefix.text, prefix.value[0], prefix.value[1])
              : getFulltext(prefix.text, prefix.value)
            }
          </div>
        ))}
        {item?.suffixes.map((suffix, index) => (
          <div key={`suffix-${index}`}>
            {/* If value is an array, it means its a hybrid affix and should be treated slightly differently */}
            {Array.isArray(suffix.value)
              ? getFulltext(suffix.text, suffix.value[0], suffix.value[1])
              : getFulltext(suffix.text, suffix.value)
            }
          </div>
        ))}
      </div>
      
    </div>
  );
};
