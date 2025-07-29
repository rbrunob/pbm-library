import type { Meta, StoryObj } from "@storybook/react-vite";

import Loading from "../components/UI/Loading";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Loading",
  component: Loading,
  // https://storybook.js.org/docs/configure/story-layout
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    textColor: "#383838",
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    textColor: "#383838",
  },
};

export const DarkTheme: Story = {
  args: {
    textColor: "#e4e4e4",
  },
};
