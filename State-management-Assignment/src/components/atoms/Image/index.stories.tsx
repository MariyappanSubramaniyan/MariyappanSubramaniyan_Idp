import type { Meta, StoryObj } from '@storybook/react'
import BaseImage from './index'

const meta: Meta<typeof BaseImage> = {
  component: BaseImage,
  title: 'Atoms/BaseImage',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BaseImage>

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
    width: 150,
    height: 150,
  },
}
