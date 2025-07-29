import type { Meta, StoryObj } from "@storybook/react-vite";
import Header from "../components/Header";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Header",
  component: Header,
  // https://storybook.js.org/docs/configure/story-layout
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    originalProductPrice: 100.95,
  },
};
