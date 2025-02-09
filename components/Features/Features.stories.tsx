import type { Meta, StoryObj } from '@storybook/react';
import Features from '.';
const meta = {
  title: 'Components/Features',
  component: Features,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
