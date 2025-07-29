import type { Meta, StoryObj } from "@storybook/react-vite";

import Link from "../components/UI/Link";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Link",
  component: Link,
  // https://storybook.js.org/docs/configure/story-layout
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: { type: "text" },
      description: "The URL the link points to",
    },
    children: {
      control: { type: "text" },
      description: "The text or content of the link",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for styling the link",
    },
  },
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    href: "https://postman-echo.com/headers",
    children: "Default Link",
  },
};

export const Customized: Story = {
  args: {
    href: "https://postman-echo.com/headers",
    children: "Custom Link",
    className:
      "text-zinc-600 underline hover:text-zinc-400 font-medium transition-colors bg-transparent hover:bg-transparent",
  },
};

export const Parameters: Story = {
  args: {
    href: {
      pathname: "https://postman-echo.com/get",
      param: { foo1: "bar1", foo2: "bar2" },
    },
    children: "This Link have parameters",
    className:
      "text-zinc-600 underline hover:text-zinc-400 font-medium transition-colors bg-transparent hover:bg-transparent",
  },
};
