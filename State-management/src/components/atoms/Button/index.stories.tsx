import type { Meta, StoryObj } from '@storybook/react';
import BaseButton from './index';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof BaseButton> = {
  title: 'Atoms/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Primary: Story = {
  args: {
    label: 'Click Me',
    variant: 'contained',
    color: 'primary',
    onClick: action('Primary Button Clicked'),
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined',
    variant: 'outlined',
    color: 'secondary',
    onClick: action('Outlined Button Clicked'),
  },
};

export const Text: Story = {
  args: {
    label: 'Text Button',
    variant: 'text',
    color: 'error',
    onClick: action('Text Button Clicked'),
  },
};
