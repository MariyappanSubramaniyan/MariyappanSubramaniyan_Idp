import type { Meta, StoryObj } from '@storybook/react'
import RefreshMolecule from './index'

const meta: Meta<typeof RefreshMolecule> = {
  component: RefreshMolecule,
  title: 'Molecules/RefreshMolecule',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RefreshMolecule>

export const Default: Story = {
  args: {},
}
