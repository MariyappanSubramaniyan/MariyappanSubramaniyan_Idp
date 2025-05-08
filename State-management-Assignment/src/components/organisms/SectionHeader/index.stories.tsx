import type { Meta, StoryObj } from "@storybook/react";
import SectionHeader from "./index";

const meta: Meta<typeof SectionHeader> = {
  title: "Organisms/SectionHeader",
  component: SectionHeader,
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {};
