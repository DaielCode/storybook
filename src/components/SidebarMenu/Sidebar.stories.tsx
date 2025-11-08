import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SidebarMenu } from "./SidebarMenu";
import type { MenuItem } from "./SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

const menuItems1Level: MenuItem[] = [
  { label: "Home" },
  { label: "About" },
  { label: "Contact" },
];

const menuItems2Level: MenuItem[] = [
  {
    label: "Home",
  },
  {
    label: "Services",
    submenu: [
      { label: "Web Development" },
      { label: "Design" },
      { label: "SEO" },
    ],
  },
  { label: "Contact" },
];

export const OneLevelMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Menu</button>
      <SidebarMenu
        items={menuItems1Level}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export const TwoLevelMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Menu</button>
      <SidebarMenu
        items={menuItems2Level}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};
