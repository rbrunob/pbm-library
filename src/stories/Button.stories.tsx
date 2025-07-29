import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import Button from "../components/UI/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Button",
  component: Button,
  // https://storybook.js.org/docs/configure/story-layout
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The content of the button",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for styling the button",
    },
  },
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "Primary Button",
  },
};

export const Customized: Story = {
  args: {
    children: "Customized Button",
    className: "bg-green-500 hover:bg-green-400 text-white",
  },
};
