import type { Meta, StoryObj } from "@storybook/react-vite";
import Item from "../components/BenefitsTable/Item";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/BenefitsItem",
  component: Item,
  // https://storybook.js.org/docs/configure/story-layout
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    checked: false,
    data: {
      authorizedQuantity: 1,
      discountPercentual: 10,
      discountValue: 10.95,
      ean: "001",
      id: 1,
    },
    onChange: () => {},
    originalProductPrice: 100.95,
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};
