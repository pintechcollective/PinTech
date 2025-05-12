import type { Meta, StoryObj } from '@storybook/react';
import MissionStatement from '.';


const meta = {
  title: 'Components/AboutPage/MissionStatement',
  component: MissionStatement,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof MissionStatement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};