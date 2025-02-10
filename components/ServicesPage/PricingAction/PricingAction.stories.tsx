import type { Meta, StoryObj } from '@storybook/react';
import PricingAction from '.';


const meta = {
  title: 'Components/ServicesPage/PricingAction/PricingAction',
  component: PricingAction,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof PricingAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};