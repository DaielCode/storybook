import React, { useEffect, useState } from "react";

export type ToastProps = {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
};

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  showCloseButton = false,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const backgroundColors = {
    success: "#4caf50",
    error: "#f44336",
    info: "#2196f3",
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        backgroundColor: backgroundColors[type],
        color: "#fff",
        padding: "10px 20px",
        borderRadius: 5,
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        display: "flex",
        alignItems: "center",
        gap: 10,
        minWidth: 200,
        zIndex: 9999,
      }}
      role="alert"
      aria-live="assertive"
    >
      <span>{message}</span>
      {showCloseButton && (
        <button
          onClick={() => {
            setVisible(false);
            onClose?.();
          }}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: 16,
            lineHeight: 1,
          }}
          aria-label="Close notification"
          type="button"
        >
          ×
        </button>
      )}
    </div>
  );
};
