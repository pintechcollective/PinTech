import type { Meta, StoryObj } from '@storybook/react';
import Feature from '.';

const meta = {
  title: 'Components/Feature',
  component: Feature,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    title: 'Train',
    description: 'Empowering success for your team and ours',
  },
};

export const Deploy: Story = {
  args: {
    id: 2,
    title: 'Deploy',
    description: 'Seamless integration for optimal performance',
  },
};

export const Maintain: Story = {
  args: {
    id: 3,
    title: 'Maintain',
    description: 'Ensuring maximum uptime, reliability, and efficiency',
  },
};
