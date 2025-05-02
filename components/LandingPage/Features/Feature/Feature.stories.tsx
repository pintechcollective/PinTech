import type { Meta, StoryObj } from '@storybook/react';
import Feature from '.';

const meta = {
  title: 'Components/LandingPage/Feature',
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
          image: "cardicons/Train.svg"
  },
};

export const Deploy: Story = {
  args: {
    id: 2,
    title: 'Deploy',
    description: 'Seamless integration for optimal performance',
          image: "cardicons/Deploy.svg"
  },
};

export const Maintain: Story = {
  args: {
    id: 3,
    title: 'Maintain',
    description: 'Ensuring maximum uptime, reliability, and efficiency',
          image: "cardicons/Maintain.svg"
  },
};
