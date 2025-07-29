import type { Meta, StoryObj } from "@storybook/react-vite";
import Iframe from "../components/Iframe";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Iframe",
  component: Iframe,
  // https://storybook.js.org/docs/configure/story-layout
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    openModal: {
      control: { type: "boolean" },
      description: "Controls whether the modal is open or not",
    },
    setOpenModal: {
      action: "setOpenModal",
      description: "Function to set the modal open state",
    },
    title: {
      control: { type: "text" },
      description: "Title of the iframe",
    },
    url: {
      control: { type: "text" },
      description: "URL to be loaded in the iframe",
    },
  },
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    openModal: true,
    setOpenModal: () => {},
    title: "Iframe Example",
    url: "https://example.com",
  },
} satisfies Meta<typeof Iframe>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
