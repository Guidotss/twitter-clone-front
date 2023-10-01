"use client";
import { useState } from "react";
import { sidebarItems as sidebarItemsConstant } from "@/constants/sidebarItems";
import { TwitterIcon } from "./Icons";

type SidebarItem = {
  name: string;
  icon: JSX.Element;
  isSelected: boolean;
};

export const Sidebar = () => {
  const [sidebarItems, setSidebarItems] =
    useState<readonly SidebarItem[]>(sidebarItemsConstant);

  const handleSidebarItem = (index: number) => {
    const newSidebarItems = sidebarItems.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          isSelected: true,
        };
      } else {
        return {
          ...item,
          isSelected: false,
        };
      }
    });
    setSidebarItems(newSidebarItems);
  };

  return (
    <aside className="mt-5">
      <figure>
        <TwitterIcon width="50px" height="40px" />
      </figure>
      <ul className="ml-4 mt-5 flex flex-col gap-5">
        {sidebarItems.map((item, index) => (
          <li
            key={item.name}
            className={`flex items-center justify-start text-2xl ${
              sidebarItems[index].isSelected ? "font-semibold" : "font-light"
            } cursor-pointer`}
            onClick={() => handleSidebarItem(index)}
          >
            <span className="mr-2">{item.icon}</span>
            <span className="mt-1">{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};
