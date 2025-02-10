import type { Meta, StoryObj } from '@storybook/react';
import ServicesGrid from '.';


const meta = {
  title: 'Components/ServicesPage/ServicesGrid/ServicesGrid',
  component: ServicesGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof ServicesGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};