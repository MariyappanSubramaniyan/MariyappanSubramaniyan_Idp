import type { Meta, StoryObj } from '@storybook/react'
import BaseText from './index'

const meta: Meta<typeof BaseText> = {
  component: BaseText,
  title: 'Atoms/BaseText',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BaseText>

export const Default: Story = {
  args: {
    text: 'This is a sample text',
    variant: 'h6',
  },
}
