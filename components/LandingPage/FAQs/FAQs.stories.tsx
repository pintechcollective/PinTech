import type { Meta, StoryObj } from '@storybook/react';
import FAQs from '.';


const meta = {
  title: 'Components/LandingPage/FAQs',
  component: FAQs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof FAQs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

