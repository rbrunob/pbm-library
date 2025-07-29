import type { Meta, StoryObj } from "@storybook/react-vite";
import Footer from "../components/Footer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Footer",
  component: Footer,
  // https://storybook.js.org/docs/configure/story-layout
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    industryLogo: "/partners/logo-parceiro-exemplo.jpeg",
  },
};

export const NoLogo: Story = {
  args: {},
};
