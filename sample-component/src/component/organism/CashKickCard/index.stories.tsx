import type { Meta, StoryObj } from "@storybook/react";
import { CashKickCard } from "./index";

const meta: Meta<typeof CashKickCard> = {
  title: "Organisms/CashKickCard",
  component: CashKickCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CashKickCard>;

export const Default: Story = {};
