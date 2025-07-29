import type { Meta, StoryObj } from "@storybook/react-vite";

import Container from "../components/UI/Container";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Container",
  component: Container,
  // https://storybook.js.org/docs/configure/story-layout
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["simple", "main"],
      },
      description:
        "The variant of the container, main is just used for the main content area, simple is used for other sections.",
    },
  },
  // https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    variant: "main",
    children: (
      <section className="p-4">
        <h2 className="text-lg font-semibold text-zinc-800">Main Container</h2>
        <p className="text-base font-normal text-zinc-800">
          This is a main container with some content.
        </p>
      </section>
    ),
  },
};

export const Simple: Story = {
  args: {
    variant: "simple",
    children: (
      <section className="p-4">
        <h2 className="text-lg font-semibold text-white">Simple Container</h2>
        <p className="text-base font-normal text-white">
          This is a simple container with some content.
        </p>
      </section>
    ),
  },
};
