"use client";
import { useContext, useState } from "react";
import { sidebarItems as sidebarItemsConstant } from "@/constants/sidebarItems";
import { MoreOptionsIcon, TwitterIcon } from "./Icons";
import { AuthContext, UiContext } from "@/context";
import Image from "next/image";
import { LogoutModal } from "@/components/auth/LogoutModal";
import { LoaderIcon } from "react-hot-toast";

type SidebarItem = {
  name: string;
  icon: JSX.Element;
  isSelected: boolean;
};

export const Sidebar = () => {
  const [sidebarItems, setSidebarItems] =
    useState<readonly SidebarItem[]>(sidebarItemsConstant);

  const { user } = useContext(AuthContext);
  const { openLogoutModal, isLogoutModalOpen, closeLogoutModal } = useContext(UiContext);

  const handleToggleLogoutModal = () => {
    if (isLogoutModalOpen) {
      closeLogoutModal();
    }else {
      openLogoutModal();
    }
  }

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
    <aside className="mt-5 h-full fixed">
      <figure>
        <TwitterIcon width="50px" height="40px" />
      </figure>
      <ul className="ml-4 mt-5 flex flex-col gap-8">
        {sidebarItems.map((item, index) => (
          <li
            key={item.name}
            className={`flex items-center justify-start text-xl ${
              sidebarItems[index].isSelected ? "font-semibold" : "font-light"
            } cursor-pointer`}
            onClick={() => handleSidebarItem(index)}
          >
            <span className="mr-4">{item.icon}</span>
            <span className="mt-1">{item.name}</span>
          </li>
        ))}
        <button className="bg-twitter rounded-full w-56 py-4 text-lg font-bold hover:bg-opacity-90 transition-colors duration-300 ease-in-out focus:outline-none">
          Postear
        </button>
      </ul>
      <div className="flex items-end h-[55vh] w-full ">
        <div className="absolute bottom-36">
          <LogoutModal />
        </div>

        <div
          className="w-full flex gap-2 px-5 items-center py-2 hover:bg-gray-500 hover:bg-opacity-20 transition-colors duration-300 ease-in-out rounded-full cursor-pointer"
          onClick={handleToggleLogoutModal}
        >
          <figure>
            {user == null ? (
              <div className="w-10 h-10 rounded-full animate-pulse bg-gray-700 bg-opacity-20" />
            ) : (
              <Image
                src={`https://${user.imageUrl}`}
                alt="profile picture"
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
          </figure>
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              {user == null ? (
                <div className="w-24 h-4 bg-gray-700 bg-opacity-20 animate-pulse rounded-full mb-2" />
              ) : (
                <span className="font-semibold">{user?.name}</span>
              )}
              {user == null ? (
                <div className="w-24 h-4 bg-gray-700 bg-opacity-20 animate-pulse rounded-full" />
              ) : (
                <span className="text-gray-600">
                  @{user?.email.split("@")[0]}
                </span>
              )}
            </div>
            <i className="self-center">
              <MoreOptionsIcon width="20px" height="20px" />
            </i>
          </div>
        </div>
      </div>
    </aside>
  );
};
