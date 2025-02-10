import type { Meta, StoryObj } from '@storybook/react';
import Cards from '.';


const meta = {
  title: 'Components/ServicesPage/Cards',
  component: Cards,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Cards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};