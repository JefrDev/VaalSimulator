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

function getFullTextHybrid(text: string[], value: number[]) {
  return text.map((t, index) => t.replace('CURRENT', value[index].toString())).join(', ');
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
            {Array.isArray(prefix.value) && Array.isArray(prefix.text)
              ? getFullTextHybrid(prefix.text, prefix.value)
              : getFulltext(prefix.text as string, prefix.value as number)
            }
          </div>
        ))}
        {item?.suffixes.map((suffix, index) => (
          <div key={`suffix-${index}`}>
            {/* If value is an array, it means its a hybrid affix and should be treated slightly differently */}
            {Array.isArray(suffix.value) && Array.isArray(suffix.text)
              ? getFullTextHybrid(suffix.text, suffix.value)
              : getFulltext(suffix.text as string, suffix.value as number)
            }
          </div>
        ))}
      </div>
      
    </div>
  );
};
