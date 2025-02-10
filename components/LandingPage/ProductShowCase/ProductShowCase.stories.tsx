import type { Meta, StoryObj } from '@storybook/react';
import ProductShowCase from '.';


const meta = {
  title: 'Components/LandingPage/ProductShowCase',
  component: ProductShowCase,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof ProductShowCase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

