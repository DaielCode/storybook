import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const SuccessToast: Story = {
  args: {
    message: "Success notification!",
    type: "success",
    duration: 3000,
    showCloseButton: false,
  },
};

export const ErrorToastWithClose: Story = {
  args: {
    message: "Error occurred!",
    type: "error",
    duration: 5000,
    showCloseButton: true,
  },
};

export const InfoToastShortDuration: Story = {
  args: {
    message: "Info message",
    type: "info",
    duration: 1500,
    showCloseButton: false,
  },
};

// Приклад сторі з ручним керуванням видимістю (опційно)
export const ControlledToast: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <Toast
          message="Manually controlled toast"
          type="info"
          onClose={() => setShow(false)}
          showCloseButton={true}
          duration={10000}
        />
      )}
      {!show && <button onClick={() => setShow(true)}>Show Toast</button>}
    </>
  );
};
