import type { Meta, StoryObj } from "@storybook/react";
import ContractRow from "./index";

const meta: Meta<typeof ContractRow> = {
  title: "Molecules/ContractRow",
  component: ContractRow,
};

export default meta;
type Story = StoryObj<typeof ContractRow>;

export const Default: Story = {
  args: {
    name: "Contract 1",
    status: "Available",
    type: "Monthly",
    perPayment: "$12,000.25",
    totalFinanced: "-",
    totalAvailable: "$126,722.64",
  },
};
