import type { Meta, StoryObj } from '@storybook/react';
import CallToAction from '.';


const meta = {
  title: 'Components/LandingPage/CallToAction',
  component: CallToAction,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof CallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};