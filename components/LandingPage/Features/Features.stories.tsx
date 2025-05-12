import type { Meta, StoryObj } from '@storybook/react';
import Features from '.';
const meta = {
  title: 'Components/LandingPage/Features',
  component: Features,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `The Features component displays key soltions about the services offered. It presents a list of features, each represented by a Feature component, showcasing the three main solutions pintech focuses on, Train, Deploy, & Maintain. The component is styled with a gradient background and responsive layout to ensure a visually appealing presentation across different screen sizes.

Key Features:
- Using Motion Value + Framer to create a border effect on Mouse Hover, similiar to Features section on Landing page
- A responsive design that adapts to different screen sizes.
- A gradient background and bold typography for visual emphasis.
-Flexbox layout for easy alignment of elements.

Copy Provided: 
**
Empowering success for your team and ours
Seamless integration for optimal performance
Ensuring maximum uptime, reliability, and efficiency
**

Usage:

Gives the potential client a insight into the solutions that the company offers, Reinforcing the companies values in their solutions.  

### Code Example
        

          \`\`\`tsx
          import Features from 'path/to/Features';

          \`\`\`

### Props:
- No props are currently passed to this component.`,
      },
    },
  },
  args: {},
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
