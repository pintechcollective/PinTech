import type { Meta, StoryObj } from '@storybook/react';
import RobotArmSection from '.';


const meta = {
  title: 'Components/RobotArmSection',
  component: RobotArmSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
  },
} satisfies Meta<typeof RobotArmSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

