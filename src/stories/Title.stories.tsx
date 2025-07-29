import type { Meta, StoryObj } from "@storybook/react-vite";
import Title from "../components/UI/Title";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Title",
  component: Title,
  // https://storybook.js.org/docs/configure/story-layout
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The content of the text",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for styling the text",
    },
    textColor: {
      control: { type: "color" },
      description: "Custom text color",
    },
    textSize: {
      control: { type: "text" },
      description: "Custom text size",
    },
  },
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "Title Content",
  },
};

export const Custom: Story = {
  args: {
    children: "Title Content Custom",
    textColor: "#ff6347",
    className: "font-semibold",
    textSize: "1.2rem",
  },
};
