import type { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./Counter";

const meta = {
  title: "Molecules/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 0,
    onAdd: () => null,
    onRemove: () => null,
    isLoading: false,
  },
};

export const Multiple: Story = {
  args: {
    count: 12,
    onAdd: () => null,
    onRemove: () => null,
    isLoading: false,
  },
};
