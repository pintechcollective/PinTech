import type { Meta, StoryObj } from '@storybook/react';
import Facts from '.';


const meta = {
  title: 'Components/AboutPage/Facts',
  component: Facts,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Facts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};