import type { Meta, StoryObj } from '@storybook/react'
import AcclerationButton from './index'

const meta: Meta<typeof AcclerationButton> = {
  component: AcclerationButton,
  title: 'Molecules/AcclerationButton',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AcclerationButton>

export const Default: Story = {
  args: {
    label: "Click Me",
    active: true,
    onClick: () => alert("Button clicked"),
  },
}
