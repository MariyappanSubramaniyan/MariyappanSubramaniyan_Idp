import type { Meta, StoryObj } from "@storybook/react";
import { Offer } from "./index";

const meta: Meta<typeof Offer> = {
  title: "Molecules/Offer",
  component: Offer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Offer>;

export const Default: Story = {};
