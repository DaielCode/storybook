import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    type: "text",
    placeholder: "Text input",
    clearable: false,
  },
};

export const TextInputClearable: Story = {
  args: {
    type: "text",
    placeholder: "Clearable text input",
    clearable: true,
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    clearable: false,
  },
};

export const PasswordInputClearable: Story = {
  args: {
    type: "password",
    clearable: true,
  },
};

export const NumberInput: Story = {
  args: {
    type: "number",
    placeholder: "Number input",
    clearable: false,
  },
};
