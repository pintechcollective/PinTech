import type { Meta, StoryObj } from '@storybook/react';
import Cards from '.';

const meta = {
  title: 'Components/ServicesPage/Cards/Cards',
  component: Cards,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The Cards component displays a collection of service offerings, each represented by a card that highlights key information and visuals. It is designed to provide an engaging overview of the services available, making it easy for potential clients to understand the offerings at a glance.

Key Features:
- Each card includes an image, title, and brief description of the service.
- Responsive design that ensures cards are displayed optimally on various screen sizes.
- Hover effects to enhance user interaction and engagement.

Usage:

The Cards component serves as a visual representation of the services provided, helping to attract and inform potential clients about the company's offerings.`,
      },
    },
  },
  args: {},
} satisfies Meta<typeof Cards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
