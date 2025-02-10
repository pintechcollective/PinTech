import type { Meta, StoryObj } from '@storybook/react';
import LogoTicker from '.';


const meta = {
  title: 'Components/LandingPage/LogoTicker',
  component: LogoTicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof LogoTicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};