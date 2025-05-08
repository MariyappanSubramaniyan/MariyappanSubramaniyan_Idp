import type { Meta, StoryObj } from '@storybook/react'
import CashAccelerationHeader from './index'

const meta: Meta<typeof CashAccelerationHeader> = {
  component: CashAccelerationHeader,
  title: 'Molecules/CashAccelerationHeader',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CashAccelerationHeader>

export const Default: Story = {
  args: {},
}
