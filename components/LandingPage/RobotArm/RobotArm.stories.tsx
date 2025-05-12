import type { Meta, StoryObj } from '@storybook/react';
import RobotArmSection from '.';


const meta = {
  title: 'Components/LandingPage/RobotArmSection',
  component: RobotArmSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The RobotArmSection component showcases a visually striking image of a robot arm, designed to capture user attention. It utilizes Framer Motion for smooth fade-in animations, enhancing the overall user experience.

Key Features:
- Smooth opacity transition when the component comes into view.
- Responsive design that adapts to various screen sizes.
- High-quality imagery for a professional presentation.

Usage:

The RobotArmSection component is ideal for highlighting advanced technology on landing pages, providing potential clients with a captivating visual representation of the company's offerings.`,
      },
    },
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

