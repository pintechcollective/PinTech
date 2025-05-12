import type { Meta, StoryObj } from '@storybook/react';
import CallToAction from '.';

const meta = {
  title: 'Components/LandingPage/CallToAction',
  component: CallToAction,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The Call To Action component encourages users to engage by providing their email for more information.

Key Features:
- A visually appealing gradient background that draws attention.
- A prominent button to submit the form and get access to more information.

Usage:

This component is ideal for landing pages where you want to capture user interest and lead them to further engagement with your services.`,
      },
    },
  },
  args: {},
} satisfies Meta<typeof CallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
