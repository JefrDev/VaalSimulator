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
      <div className="p-2">
        {item &&
          [
            ...item.prefixes.map((p) => ({ ...p, type: "prefix" })),
            ...item.suffixes.map((s) => ({ ...s, type: "suffix" })),
          ].map((affix, index) => (
            <div
              key={`affix-${index}`}
              className="flex justify-between w-full items-center mb-1"
            >
              <span className="text-sm text-gray-500 w-20">{affix.type}</span>
              <div className="flex-1">
                {isHybridAffix(affix)
                  ? getFullTextHybrid(affix.text, affix.value)
                  : getFulltext(affix.text, affix.value)}
              </div>
              <span className="text-sm text-gray-500 w-12 text-right">
                T{affix.tier}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};
