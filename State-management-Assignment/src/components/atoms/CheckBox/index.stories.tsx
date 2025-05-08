import type { Meta, StoryObj } from '@storybook/react';
import BaseCheckbox from './index';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof BaseCheckbox> = {
  title: 'Atoms/BaseCheckbox',
  component: BaseCheckbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
    onChange: { action: 'checkbox changed' },
  },
};

export default meta;
type Story = StoryObj<typeof BaseCheckbox>;

export const Checked: Story = {
  args: {
    checked: true,
    color: 'primary',
    onChange: action('Checked'),
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    color: 'secondary',
    onChange: action('Unchecked'),
  },
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    color: 'default',
    onChange: action('Disabled'),
  },
};
