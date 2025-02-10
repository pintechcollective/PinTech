import type { Meta, StoryObj } from '@storybook/react';
import Gallery from '.';


const meta = {
  title: 'Components/AboutPage/Gallery',
  component: Gallery,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};