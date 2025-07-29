import type { Meta, StoryObj } from "@storybook/react-vite";
import SecurityNumberRegitered from "../components/SecurityNumberRegitered";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/SecurityNumberRegitered",
  component: SecurityNumberRegitered,
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
} satisfies Meta<typeof SecurityNumberRegitered>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    textColor: "#8f8f8f",
  },
};
