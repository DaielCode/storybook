import React, { useState } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  clearable?: boolean;
};

export const Input: React.FC<InputProps> = ({
  type = "text",
  clearable,
  ...props
}) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const togglePassword = () => setShowPassword(!showPassword);
  const clearInput = () => setValue("");

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <input
        {...props}
        type={isPassword && !showPassword ? "password" : "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ paddingRight: clearable || isPassword ? 30 : 8 }}
      />
      {isPassword && (
        <button
          onClick={togglePassword}
          style={{
            position: "absolute",
            right: clearable ? 30 : 5,
            top: "50%",
            transform: "translateY(-50%)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Toggle password visibility"
          type="button"
        >
          {showPassword ? "👁️" : "🙈"}
        </button>
      )}
      {clearable && value && (
        <button
          onClick={clearInput}
          style={{
            position: "absolute",
            right: 5,
            top: "50%",
            transform: "translateY(-50%)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Clear input"
          type="button"
        >
          ✖
        </button>
      )}
    </div>
  );
};
