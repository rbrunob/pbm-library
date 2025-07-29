import type { Meta, StoryObj } from "@storybook/react-vite";
import SecurityNumberInvalid from "../components/SecurityNumberInvalid";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/SecurityNumberInvalid",
  component: SecurityNumberInvalid,
  // https://storybook.js.org/docs/configure/story-layout
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    textColor: {
      control: { type: "color" },
      description: "Custom text color for the component",
    },
  },
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof SecurityNumberInvalid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    textColor: "#8f8f8f",
  },
};
