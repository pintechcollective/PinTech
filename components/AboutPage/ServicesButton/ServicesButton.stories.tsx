import type { Meta, StoryObj } from '@storybook/react';
import ServicesButton from '.';


const meta = {
  title: 'Components/AboutPage/ServicesButton',
  component: ServicesButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof ServicesButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};