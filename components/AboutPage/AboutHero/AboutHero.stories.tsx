import type { Meta, StoryObj } from '@storybook/react';
import AboutHero from '.';


const meta = {
  title: 'Components/AboutPage/AboutHero',
  component: AboutHero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof AboutHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};