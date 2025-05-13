import type { Meta, StoryObj } from "@storybook/react";
import { SupportingText } from "./index";

const meta: Meta<typeof SupportingText> = {
  title: "Atoms/SupportingText",
  component: SupportingText,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SupportingText>;

export const Default: Story = {};
