import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { CartCounter } from "./CartCounter";

const meta = {
  title: "Molecules/CartCounter",
  component: CartCounter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  decorators: (Story: StoryFn): JSX.Element => (
    <div style={{ background: "var(--violet)", padding: "10px" }}>
      <Story />
    </div>
  ),
} satisfies Meta<typeof CartCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 0,
  },
};

export const Multiple: Story = {
  args: {
    count: 99,
  },
};
