import type { Meta, StoryObj } from "@storybook/react";
import img from "@/mock/image.png";
import { ProductCard } from "./ProductCard";

const meta = {
  title: "Organism/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    image: img,
    initialCount: 0,
    name: "Essence Mascara Lash Princess",
    price: 1,
  },
};


export const Multiple: Story = {
  args: {
    id: 1,
    image: img,
    initialCount: 10,
    name: "Essence Mascara Lash Princess",
    price: 1,
  },
};
