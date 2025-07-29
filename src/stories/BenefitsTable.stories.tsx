import type { Meta, StoryObj } from "@storybook/react-vite";
import BenefitsTable from "../components/BenefitsTable";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/BenefitsTable",
  component: BenefitsTable,
  // https://storybook.js.org/docs/configure/story-layout
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof BenefitsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    originalProductPrice: 100.95,
  },
};
