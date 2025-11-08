import React, { useState } from "react";

export type MenuItem = {
  label: string;
  submenu?: MenuItem[];
};

export type SidebarMenuProps = {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  isOpen,
  onClose,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1000,
        }}
        data-testid="backdrop"
      />
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: 300,
          height: "100vh",
          backgroundColor: "#fff",
          boxShadow: "-2px 0 8px rgba(0,0,0,0.2)",
          padding: 20,
          zIndex: 1001,
          overflowY: "auto",
        }}
      >
        <nav>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {items.map((item, index) => (
              <li key={index} style={{ marginBottom: 10 }}>
                <div
                  style={{ cursor: item.submenu ? "pointer" : "default" }}
                  onClick={() => item.submenu && toggleSubmenu(index)}
                >
                  {item.label}{" "}
                  {item.submenu && (expandedIndex === index ? "▲" : "▼")}
                </div>
                {item.submenu && expandedIndex === index && (
                  <ul style={{ paddingLeft: 15, marginTop: 5 }}>
                    {item.submenu.map((subitem, subIndex) => (
                      <li key={subIndex} style={{ marginBottom: 5 }}>
                        {subitem.label}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SidebarMenu;
