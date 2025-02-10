import type { Meta, StoryObj } from '@storybook/react';
import Hero from '.';


const meta = {
  title: 'Components/LandingPage/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

