import { useState, useEffect } from "react";
import {
  Item,
  createDefaultItem,
  VariableAffix,
  FixedAffix,
  HybridAffix,
} from "../types/Item";

export const ItemDisplay = () => {
  const [item, setItem] = useState<Item>();

  async function loadDefaultItem(itemName: string) {
    const item = createDefaultItem(itemName);
    setItem(item);
  }

  function isHybridAffix(
    affix: VariableAffix | FixedAffix | HybridAffix
  ): affix is HybridAffix {
    return (
      Array.isArray((affix as HybridAffix).text) &&
      Array.isArray((affix as HybridAffix).value)
    );
  }

  function getFulltext(text: string, value: number) {
    return text.replace("CURRENT", value.toString());
  }

  function getFullTextHybrid(text: string[], value: number[]) {
    return text
      .map((t, index) => t.replace("CURRENT", value[index].toString()))
      .join(", ");
  }

  useEffect(() => {
    loadDefaultItem("Expert Feathered Sandals");
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100">
      <h1>Item Display</h1>
      <h2>{item?.itemName}</h2>
      <div>
        <div className="p-0.5">
          {item?.prefixes.map((prefix, index) => (
            <div key={`prefix-${index}`}>
              {isHybridAffix(prefix)
                ? getFullTextHybrid(prefix.text, prefix.value)
                : getFulltext(prefix.text, prefix.value)}
            </div>
          ))}
        </div>
        <div>
          {item?.suffixes.map((suffix, index) => (
            <div className="p-0.5" key={`suffix-${index}`}>
              {isHybridAffix(suffix)
                ? getFullTextHybrid(suffix.text, suffix.value)
                : getFulltext(suffix.text, suffix.value)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
