import type { Meta, StoryObj } from "@storybook/react-vite";
import Form from "../components/Form";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Form",
  component: Form,
  // https://storybook.js.org/docs/configure/story-layout
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    setData: {
      action: "setData",
      description: "Function to set form data",
    },
  },
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    setData: (data) => console.log("Form data set:", data),
  },
};
