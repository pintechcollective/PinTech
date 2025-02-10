import type { Meta, StoryObj } from '@storybook/react';
import Testimonials from '.';


const meta = {
  title: 'Components/LandingPage/Testimonials',
  component: Testimonials,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

