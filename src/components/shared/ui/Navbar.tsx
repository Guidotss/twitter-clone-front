"use client";
import { useState } from "react";

interface NavbarItemProps {
  name: string;
  styles?: string;
  setActive: (name: string) => void;
}
function NavbarItem({ name, styles, setActive }: NavbarItemProps) {
  return (
    <li
      className={`cursor-pointer ${styles ?? ""} `}
      onClick={() => setActive(name)}
    >
      <span>{name}</span>
    </li>
  );
}

type NavbarItem = {
  name: string;
  isSelected: boolean;
};
export const Navbar = () => {
  const [navbarItem, setNavbarItem] = useState<NavbarItem[]>([
    {
      name: "Para ti",
      isSelected: true,
    },
    {
      name: "Siguiendo",
      isSelected: false,
    },
  ]);

  const handleNavbarItem = (name: string) => {
    const newNavbarItem = navbarItem.map((item) => {
      if (item.name === name) {
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
    setNavbarItem(newNavbarItem);
  };

  return (
    <nav className="flex items-center justify-center w-full mt-10">
      <ul className="flex justify-around w-full">
        {navbarItem.map((item, index) => (
          <div key={item.name} className="hover:bg-gray-700 2xl:px-[92px] hover:bg-opacity-30 transition-colors duration-300 ease-in-out">
            <NavbarItem
              name={item.name}
              styles={
                item.isSelected
                  ? "font-semibold border-b-4 border-b-twitter rounded-sm py-1 px-3"
                  : "text-gray-500 py-1 px-3"
              }
              setActive={handleNavbarItem}
            />
          </div>
        ))}
      </ul>
    </nav>
  );
};
